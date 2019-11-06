import React, { useState } from 'react';

interface faqs {
  [index: string]: {
    question: string;
    answer: any;
  }[];
}

export const FAQBoxView: React.FC<faqs> = faqs => {
  const [toggle, setToggle] = useState(false);
  const [answeredQuestion, setAnswer] = useState();
  const [questionClicked, setClickedQuestion] = useState();

  function onToggle(answer?: any, question?: any) {
    setToggle(!toggle);
    setAnswer(answer);
    setClickedQuestion(question);
    return;
  }

  const Question = () => {
    return (
      <span className="faq__questionGrid">
        {faqs.qAndA.map(questions => (
          <button
            className="faq__questions"
            key={questions.question}
            onClick={() => onToggle(questions.answer, questions.question)}
          >
            {questions.question}
          </button>
        ))}
      </span>
    );
  };

  const Answer = () => {
    return (
      <div className="faq__popupContainer">
        <span className="faq__popupQuestion">{questionClicked}</span>
        <span className="faq__popupAnswer">{answeredQuestion}</span>
        <button className="faq__popupExit" onClick={onToggle}>
          Back
        </button>
      </div>
    );
  };

  return (
    <div className="faq__box-container">
      <div className="faq__box">
        <span className="faq__title">FAQ</span>
        <span className="faq__divider"></span>
        {toggle ? <Answer /> : <Question />}
      </div>
    </div>
  );
};

export default FAQBoxView;
