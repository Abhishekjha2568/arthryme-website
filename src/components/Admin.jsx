import { useEffect, useState } from "react"

function Admin() {
  const [quotes, setQuotes] = useState([])
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
  const token = localStorage.getItem("adminToken")

  fetch(`${import.meta.env.VITE_API_URL}/api/quotes`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

    .then((response) => {
       if (response.status === 401) {
          localStorage.removeItem("adminToken")
          window.location.reload()
          return null
     }

         return response.json()

})
    
    .then((data) => {
      if (Array.isArray(data)) {
         setQuotes(data)
    }  else {
         setQuotes([])
      }
    })
}, [])


  const updateStatus = (id, status) => {
     const token = localStorage.getItem("adminToken")

    fetch(`${import.meta.env.VITE_API_URL}/api/quotes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ status })
    })
      .then((response) => response.json())
      .then((updatedQuote) => {
        setQuotes((prevQuotes) =>
          prevQuotes.map((quote) =>
            quote._id === updatedQuote._id
              ? updatedQuote
              : quote
          )
        )
      })
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
       <h1>Admin Dashboard</h1>

    <button
      onClick={() => {
        localStorage.removeItem("adminToken")
        window.location.reload()
      }}
    >
      Logout
    </button>
  </div>
    
      <input
        type="text"
        placeholder="Search quotes"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="pending">Pending</option>
        <option value="contacted">Contacted</option>
        <option value="completed">Completed</option>
      </select>

      <div className="quotes-list">

        {quotes
          .filter((quote) =>
            quote.name.toLowerCase().includes(search.toLowerCase()) ||
            quote.email.toLowerCase().includes(search.toLowerCase()) ||
            quote.service.toLowerCase().includes(search.toLowerCase())
          )
          .filter((quote) =>
            statusFilter === "all" ||
            quote.status === statusFilter
          )
          .map((quote) => (

            <div
              className="quote-card"
              key={quote._id}
            >

              <p><strong>Name:</strong> {quote.name}</p>
              <p><strong>Email:</strong> {quote.email}</p>
              <p><strong>Phone:</strong> {quote.phone}</p>
              <p><strong>Service:</strong> {quote.service}</p>
              <p><strong>Requirement:</strong> {quote.requirement}</p>
 
             
              <select
                className={`quote-status $ {quote-status}`}
                value={quote.status}
                onChange={(event) =>
                  updateStatus(
                    quote._id,
                    event.target.value
                  )
                }
              >
                <option value="pending">
                  Pending
                </option>

                <option value="contacted">
                  Contacted
                </option>

                <option value="completed">
                  Completed
                </option>
              </select>

            </div>

          ))}

      </div>

    </div>
  )
}

export default Admin