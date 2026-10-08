import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import SolutionFinder from "./components/SolutionFinder"
import Chatbot from "./components/Chatbot"
import About from "./components/About"
import Contact from "./components/Contact"
import Quote from "./components/Quote"
import AdminLogin from "./components/AdminLogin"
import Admin from "./components/Admin"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
)

useEffect(() => {
   localStorage.setItem("darkMode", darkMode)

}, [darkMode])



  const [isAdmin, setIsAdmin] = useState(
    !!localStorage.getItem("adminToken")
  )

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <div className={darkMode ? "app dark-mode" : "app"}>
              <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />

              <Hero />
              <Services />
              <SolutionFinder />
              <Chatbot />
              <About />
              <Contact />
              <Quote />

              <Footer />
            </div>
          }
        />

        <Route
          path="/admin/login"
          element={<AdminLogin setIsAdmin={setIsAdmin} />}
        />

        <Route
          path="/admin"
          element={
            isAdmin ? <Admin /> : <Navigate to="/admin/login" />
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App