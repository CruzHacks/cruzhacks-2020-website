import React from 'react';

const faqs = [
  {
    "question": "What is a hackathon?",
    "answer": "CruzHacks 2020"
  },
  {
    "question": "Who can participate?",
    "answer": "Anybody!"
  },
  {
    "question": "How can I be a sponsor?",
    "answer": "Just ask!"
  },
  {
    "question": "Is it completely free?",
    "answer": "Possibly"
  },
  {
    "question": "What should I bring?",
    "answer": "Laptops"
  },
  {
    "question": "How can I become a mentor or a judge?",
    "answer": "Ask."
  },
  {
    "question": "What are the rules?",
    "answer": "There aren't any"
  },
  {
    "question": "How many people can I have on my team?",
    "answer": "YOLO"
  },
  {
    "question": "How can I keep up to date on Cruzhacks 2020 news?",
    "answer": "Hit that subscribe button"
  },
  {
    "question": "I'd like to help out!",
    "answer": "Lit send in an appication"
  },
  {
    "question": "I don't see my question here.",
    "answer": "Email us right here"
  }
]

const test = faqs.map((q, index) =>{
  return(
    <div className="question" key={index}>
      <button><b>{q.question}</b></button>
      {/* <p>{q.answer}</p> */}
    </div>
  )
})


const FAQRectangle: React.FC = () => {
  return (
    <div className="faq-rectangle">
      <svg width="804" height="617" viewBox="0 0 804 617" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M77 2h649.697c41.421 0 75 33.579 75 75v463c0 41.421-33.579 75-75 75H77c-41.421 0-75-33.579-75-75V77C2 35.579 35.579 2 77 2z" stroke="#7171CB" strokeWidth="4"/>
      </svg>
      <div className="faq-questions">
        {test}
      </div>
    </div>
  )
}

export default FAQRectangle