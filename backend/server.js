const express = require("express");
const cors = require("cors")
require("dotenv").config()
const connectDB = require("./config/db")
const Contact = require("./models/Contact")
const Quote = require("./models/Quote")
const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided."
    })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.admin = decoded

    next()
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token."
    })
  }
}

const app = express()
const PORT = 5000


app.use(cors())
app.use(express.json())

connectDB()

app.post("/api/quotes", async (req, res) => {
  try {
    const { name, email, phone, service, requirement } = req.body

    if (!name || !email || !phone || !service || !requirement) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    const newQuote = new Quote({
      name,
      email,
      phone,
      service,
      requirement
    })

    await newQuote.save()

    res.status(201).json({
      message: "Quote request submitted successfully"
    })
  } catch (error) {
    console.error("QUOTE ERROR:", error.message)

    res.status(500).json({
      message: "Failed to submit quote request"
    })
  }
})


app.get("/api/quotes", verifyToken, async(req, res) => {
const quotes = await Quote.find()
res.json(quotes)

})


app.patch("/api/quotes/:id", verifyToken, async (req, res) => {
  try {
    const { status } = req.body

    const quote = await Quote.findByIdAndUpdate(
      req.params.id,
      { status },
      { returnDocument: "after" }
    )

    if (!quote) {
      return res.status(404).json({
        message: "Quote not found"
      })
    }

    res.json(quote)
  } catch (error) {
    console.error("UPDATE QUOTE ERROR:", error.message)

    res.status(500).json({
      message: "Failed to update quote status"
    })
  }
})



app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    const newContact = new Contact({
      name,
      email,
      subject,
      message
    })

    await newContact.save()

    res.status(201).json({
      message: "Contact message submitted successfully"
    })
  } catch (error) {
    console.error("CONTACT ERROR:", error.message)

    res.status(500).json({
      message: "Failed to submit contact message"
    })
  }
})


app.post("/api/admin/login", async (req, res) => {
    const { email, password } = req.body

if (
   email !== process.env.ADMIN_EMAIL ||
   password !== process.env.ADMIN_PASSWORD
) {
     return res.status(401).json({
       message: "Invaild email or password"
    }
  )
}

     const token = jwt.sign(
        { email: email },
       process.env.JWT_SECRET,
        { expiresIn: "1h"}
   )

      res.json({
        message: "Admin login successful",
        token
   })

})

app.get("/", (req, res) => {
res.send("Arthryme Backend is running")
})

app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`)
})