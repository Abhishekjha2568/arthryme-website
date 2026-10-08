function Navbar({ darkMode, setDarkMode }) {


    return (
        <nav className={`navbar ${darkMode ? "dark" : ""}`}>
        <div>
           <h2>Arthryme</h2>
      </div>

         <div>
            <a href="#home">Home</a>

            <a href="#services">Services</a>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

           <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "Light Mode" : "Dark Mode"}
             </button>
           </div>
        </nav>
    )
}

export default Navbar ;