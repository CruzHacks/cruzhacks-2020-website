import React from 'react';
import ReactContactForm from 'react-mail-form';
import FAQBoxView from './container/faq-container.view'

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
    "answer": <ReactContactForm className="faq__contactForm" to="contact@cruzhacks.com" />
  }
]


const FAQView: React.FC = () => {
    return (
      <div className="faq__container">
        <FAQBoxView qAndA={faqs}/>
      </div>
    )
}

export default FAQView