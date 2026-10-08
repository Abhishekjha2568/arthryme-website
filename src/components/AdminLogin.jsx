import { useState } from "react"
import { useNavigate } from "react-router-dom"


function AdminLogin({ setIsAdmin }) {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")


    async function handleLogin(event) {
        event.preventDefault()

        const response = await fetch("http://localhost:5000/api/admin/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })

        const data = await response.json()

        if (response.ok) {
           localStorage.setItem("adminToken", data.token)
           console.log("Admin token saved")
           setIsAdmin(true)
           navigate("/admin")
      }
         else {
            setError(data.message)
   }
        
    }

    return (
        <section className="admin-page">
            <h2>Admin Login</h2>


            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Admin Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
             {error && <p className="login-error">{error}</p>}
        </section>
    )

}

export default AdminLogin