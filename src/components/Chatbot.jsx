import { useState } from "react"

const faqAnswers = {
   service:
      "Arthryme provides multiple solutions including Manpower, IT Hardware & Digital Solutions, School & College ERP, Digital Marketing, Podcasting, Automobile & GPS, Printing, Grocery, Furniture, and Industrial solutions.",

   about:
      "Arthryme Private Limited is a multi-solution company focused on providing practical solutions across different business and service areas.",

   "digital marketing":
      "Arthryme provides digital marketing solutions to help businesses build their online presence.",

   "it hardware":
      "Arthryme provides IT Hardware & Digital Solutions to support business technology and digital requirements.",

   erp:
      "Arthryme provides School & College ERP solutions to help educational institutions manage their operations.",

   podcast:
      "Arthryme provides podcasting solutions to support content creation and digital communication.",

   gps:
      "Arthryme provides Automobile & GPS-related solutions for tracking and operational needs.",

   printing:
      "Arthryme provides printing solutions for different business and operational requirements.",

   grocery:
      "Arthryme provides grocery-related solutions designed to support everyday requirements.",

   furniture:
      "Arthryme provides furniture solutions for different business and institutional needs.",

   industrial:
      "Arthryme provides industrial solutions to support operational and business requirements."
}




function Chatbot() {
   const [question, setQuestion] = useState("")
   const [answer, setAnswer] = useState("")

   function handleSend() {
      const userQuestion = question.toLowerCase()

      if (!question.trim()) {
         setAnswer("Please enter a question first.")
         return
      }

      setQuestion("")

      if (userQuestion.includes("digital marketing")) {
         setAnswer(faqAnswers["digital marketing"])
      }
      else if (userQuestion.includes("it hardware")) {
         setAnswer(faqAnswers["it hardware"])
      }
      else if (userQuestion.includes("erp")) {
         setAnswer(faqAnswers.erp)
      }
      else if (userQuestion.includes("podcast")) {
         setAnswer(faqAnswers.podcast)
      }
      else if (userQuestion.includes("gps")) {
         setAnswer(faqAnswers.gps)
      }
      else if (userQuestion.includes("printing")) {
         setAnswer(faqAnswers.printing)
      }
      else if (userQuestion.includes("grocery")) {
         setAnswer(faqAnswers.grocery)
      }
      else if (userQuestion.includes("furniture")) {
         setAnswer(faqAnswers.furniture)
      }
      else if (userQuestion.includes("industrial")) {
         setAnswer(faqAnswers.industrial)
      }
      else if (userQuestion.includes("about")) {
         setAnswer(faqAnswers.about)
      }
      else if (
         userQuestion.includes("service") ||
         userQuestion.includes("solution") ||
         userQuestion.includes("offer") ||
         userQuestion.includes("provide")
      ) {
         setAnswer(faqAnswers.service)
      }
      else {
         setAnswer(
            "Sorry, I don't have information about that yet. Please contact Arthryme for more details."
         )
      }
   }


   return (

      <section className="chatbot">
         <h2>Ask Arthryme</h2>

         <p>Have a question? Ask us about our services and solutions.</p>


         <input type="text"
            placeholder="Ask your question..."
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            onKeyDown={(event) => {
               if (event.key === "Enter") {
                  handleSend()
               }
            }}

         />



         <button onClick={handleSend}>Send</button>
         {answer && (
            <div>
               <h3>Arthryme Assistant</h3>
               <p>{answer}</p>
            </div>
         )}

      </section>
   )
}

export default Chatbot