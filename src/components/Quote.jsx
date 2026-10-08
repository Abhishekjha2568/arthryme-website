function Quote() {
  async function handleQuoteSubmit(event) {
    event.preventDefault()
     const form = event.target
     const formData = new FormData(form)
     const data = Object.fromEntries(formData)
     const response = await fetch(`${import.meta.env.VITE_API_URL}/api/quotes`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json"
      },
          body: JSON.stringify(data)
   })

      
       if (response.ok) {
           alert("Your quote request has been submitted!")
            } else {
             alert("Failed to submit quote request.")
     }
  }

  return (
    <section className="quote">

      <div className="section-heading">
        <p>REQUEST A QUOTE</p>

        <h2>Tell Us What You Need</h2>
      </div>

      <form className="quote-form" onSubmit={handleQuoteSubmit}>

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
          name="phone"
          placeholder="Your Phone"
          required
        />

        <select name="service" required>
          <option value="">Select a Service</option>

          <option value="manpower">Manpower Services</option>

          <option value="it-hardware">
            IT Hardware & Digital Solutions
          </option>


          <option value="erp">
            School & College ERP
          </option>


          <option value="digital-marketing">
            Digital Marketing
          </option>

         <option value={"podcasting"}>Podcasting</option>
         
         <option value={"automobile"}>Automobile & GPS</option>

         <option value={"printing"}>Printing</option>

         <option value={"grocery"}>Grocery</option>

         <option value={"furniture"}>Furniture</option>

         <option value={"industrial"}>Industrial</option>
        </select>

        <textarea
          name="requirement"
          placeholder="Tell us about your requirement"
          required
         />

        <button type="submit">
          Request a Quote
        </button>

      </form>

    </section>
  )
}

export default Quote