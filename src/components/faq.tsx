import { useState } from "react";

export const Faq = () => {
  const [count, setCount] = useState<number>(2);
  const [hidden, setHide] = useState<boolean>(false);
  const [animate,setAnimate]= useState<boolean>()

  function showFaq() {
   let newCount = 1
    
    setCount((e) => {
      newCount = e + 1;     
      return newCount;
    });

    console.log(count%2===0);
    if(count%2===0){
      setHide(true)
    }else{
      setHide(false)
    }

    if(hidden){

    }
  }

  const ansOne = <div className="ans">To start selling, create a seller account by entering your email and following the setup instructions.</div>
  const  close = <span></span>




  return (
    <main className="faq-comp">
      <h1>FAQ</h1>

        <div className="qna">
          <h3 className="questions" onClick={() => showFaq()}>
            How do I start selling on Ticketmaster?
          </h3>
          {hidden?ansOne:close}
        </div>

        <div>
          <h3>What types of tickets can I sell?</h3>
          <p>
            You can sell tickets for concerts, sports events, theater shows, and
            more..
          </p>
        </div>

    </main>

  );
};
