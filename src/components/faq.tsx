// import { useState } from "react";

// export const Faq = () => {
//   const [count, setCount] = useState<number>(2);
//   const [hidden, setHide] = useState<boolean>(false);

//   function showFaq() {
//     let newCount = 1;

//     setCount((e) => {
//       newCount = e + 1;
//       return newCount;
//     });


//     if (count % 2 === 0) {
//       setHide(true);
//     } else {
//       setHide(false);
//     }
//   }

//   interface qandaInterface {
//     id: number
//     question: string;
//     answer: string;
//   }

//   const questionAnswers: qandaInterface[] = [
//     {
//       id:1,
//       question: "How do I start selling on Ticketmaster?",
//       answer:
//         "To start selling, create a seller account by entering your email and following the setup instructions.",
//     },
//     {
//       id:2,
//       question: "What types of tickets can I sell?",
//       answer:
//         "You can sell tickets for concerts, sports events, theater shows, and more.",
//     },
//   ];

//   return (
//     <main className="faq-comp">
//       <h1>FAQ</h1>
//       <div className="qna">

//       {questionAnswers.map((e, index) => (
        
//         <div key={index}>         
//           <h3 className="questions" onClick={showFaq}>
//             {e.question}
//           </h3>
//           <div className={`answer ${hidden ? "show" : "hide"}`}>{e.answer}</div>
//         </div>
//       ))}




//         {/* <h3 className="questions" onClick={() => showFaq()}>
//           How do I start selling on Ticketmaster?
//         </h3>

//         <div className={`answer ${hidden ? "show" : "hide"}`}>
//           To start selling, create a seller account by entering your email and
//           following the setup instructions.
//         </div> */}

















//       </div>





//     </main>
//   );
// };
