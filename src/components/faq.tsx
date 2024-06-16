import { useState } from "react";

export const Faq = () => {
  const [count, setCount] = useState<number>(2);
  const [hidden, setHide] = useState<boolean>(false);

  function showFaq() {
    let newCount = 1;

    setCount((e) => {
      newCount = e + 1;
      return newCount;
    });

    if (count % 2 === 0) {
      setHide(true);
    } else {
      setHide(false);
    }
  }

  interface qandaInterface {
    question: string;
    answer: string;
  }

  const questionAnswers: qandaInterface[] = [
    {
      question: "How do I start selling on Ticketmaster?",
      answer:
        "To start selling, create a seller account by entering your email and following the setup instructions.",
    },
    {
      question: "What types of tickets can I sell?",
      answer:
        "You can sell tickets for concerts, sports events, theater shows, and more.",
    },
  ];

  return (
    <main className="faq-comp">
      <h1>FAQ</h1>

      <div className="qna">
        <h3 className="questions" onClick={() => showFaq()}>
          How do I start selling on Ticketmaster?
        </h3>
        <div className={`answer ${hidden ? "show" : "hide"}`}>
          To start selling, create a seller account by entering your email and
          following the setup instructions.
        </div>
      </div>

      <div>
        <h3 className="questions" onClick={() => showFaq()}>
          What types of tickets can I sell?
        </h3>
        <div className={`answer ${hidden ? "show" : "hide"}`}>
          You can sell tickets for concerts, sports events, theater shows, and
          more..
        </div>
      </div>
    </main>
  );
};
