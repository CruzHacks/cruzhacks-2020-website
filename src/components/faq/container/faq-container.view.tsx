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
      <div className="faq__box">
        <span className="faq__title">FAQ</span>
        <span className="faq__divider"></span>
        <span className="faq__questionGrid">
            {faqs.qAndA.map(questions => (
              <span className="faq__questions" key={questions.question}>{questions.question}</span>
            ))
            }
        </span>
        
      </div>
    </div>
  )
}

export default FAQBoxView