function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Arthryme Private Limited</h1>

        <p className="tagline">
          one Partner. Multiple Solutions.
        </p>

        <p className="description">
          We provide innovative and reliable solution to help
          business grow, improve, and succeed.
        </p>

        <div className="hero-buttons">
          <button onClick={() => {
             document.getElementById("services").scrollIntoView({
                  behavior: "smooth"
     })
 
  }}>
          Explore Services
       </button>

          <button className="secondary-btn"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                   behavior: "smooth"
       })

     }} >Contact Us</button>
        </div>
      </div>
    </section>
  )
}

export default Hero