import React from 'react';

interface faqs {
  [index: string]: {
    question: string;
    answer: string;
  }[];
}

export const FAQBoxView: React.FC<faqs> = faqs => {
  return(
    <div className="faq__box-container">
      {faqs.qAndA.map(questions => (
        <div className="faq__box" key={questions.question}>
          <button className="faq__questions">{questions.question}</button>
        </div>
      ))
      }
    </div>
  )
}

export default FAQBoxView