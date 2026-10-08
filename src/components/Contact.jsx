function Contact() {

   async function handleContactSubmit(event) {
  event.preventDefault()

  const form = event.target
  const formData = new FormData(form)
  const data = Object.fromEntries(formData)

  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })

  const result = await response.json()

    if (response.ok) {
    console.log(result)
      alert("Your message has been sent successfully!")
   } else {

  console.log(result)
  alert("Failed to send message.")
   }
}


  return (
    <section className="contact" id="contact">

      <div className="section-heading">
        <p>GET IN TOUCH</p>

        <h2>Contact Us</h2>
      </div>

      <form className="contact-form" onSubmit={handleContactSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
            />

        <button type="submit">
          Send Message
        </button>
      </form>

    </section>
  )
}

export default Contact