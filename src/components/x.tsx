import { useState } from "react";

export const Faq = () => {
  const [visibleAnswers, setVisibleAnswers] = useState([false, false]);
  const [count, setCount] = useState<number>(2);
  const [hidden, setHide] = useState<boolean>(false);

  const toggleAnswer = (index: number) => {
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
    setVisibleAnswers((prevVisibleAnswers) => {
      const newVisibleAnswers = [...prevVisibleAnswers];
      newVisibleAnswers[index] = !newVisibleAnswers[index];
      return newVisibleAnswers;
    });
  };

  const questionAnswers = [
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
        {questionAnswers.map((qa, index) => (
          <div key={index}>
            <h3 className="questions" onClick={() => toggleAnswer(index)}>
              {qa.question}
            </h3>
            {visibleAnswers[index] && (
              <div className={`answer${hidden ? "show" : "hide"}`}>
                {qa.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};
