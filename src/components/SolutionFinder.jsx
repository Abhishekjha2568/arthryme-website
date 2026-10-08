import { useState } from "react"

function SolutionFinder() {

       const [selectedNeed, setSelectedNeed] = useState("")

        
         const solutions = {
            manpower: "Manpower Services",
            it: "IT Hardware & Digital Solutions",
            erp: "School & College ERP",
            marketing: "Digital Marketing",
            podcasting: "Podcasting",
            automobile: "Automobile & GPS",
            printing: "Printing",
            grocery: "Grocery",
            furniture: "Furniture",
            industrial: "Industrial"


     }

  return (


    <section className="solution-finder">
      <h2>Find the Right Solution</h2>
      <p>
        Tell us what you need and we will suggest a suitable solution.
      </p>

      <select value={selectedNeed} onChange={(event) => setSelectedNeed(event.target.value)}>
         <option value="">Select your requirement</option>
         <option value="manpower">I need manpower support</option>
         <option value="it">I need IT hardware or digital support</option>
         <option value="erp"> I need an ERP for an educational institution</option>
         <option value="marketing"> I want to promote my business online</option>
         <option value="podcasting">I need podcasting support</option>
         <option value="automobile">I need automobile or GPS solutions </option>
         <option value="printing"> I need printing services</option>
         <option value="grocery">I need grocery-related solutions</option>
         <option value="furniture"> I need furniture solutions</option>
         <option value="industrial">I need industrial solutions</option>
      </select>

         {selectedNeed && (
             <div>
                <h3>Recommended Solution</h3>
                <p>{solutions[selectedNeed]}</p>
             </div>
        )}
    </section>
  )
}

export default SolutionFinder