import React from 'react';

interface faqs {
    [index: string]: {
      question: string;
      answer: any;
    }[];
  };

const FAQCardView: React.FC<faqs> = faqs => {

    const Questions = () =>{

        return(
            <div className="faq-support__questions-container">
                {faqs.qAndA.map(questions =>(
                    <div className="`faq-support__questions-and-answers" key={questions.question}>
                        <button
                            className={`faq-support__questions ${questions.question}`}
                            onClick={() => {
                                var currElement = document.getElementById(`faq-support__answers ${questions.question}`);
                                console.log(currElement!.style.display)
                                currElement!.style.display === "none"
                                ? currElement!.style.display = "block"
                                : currElement!.style.display = "none"
                                
                            }}
                            type="button"
                        >
                            {questions.question}
                        </button>
                        <span
                            className={`faq-support__answers ${questions.question}`}
                            id = {`faq-support__answers ${questions.question}`}
                            style={{display:"none"}}
                        >
                            {questions.answer}
                        </span>
                    </div>
                ))}
            </div>
        ); 
    }

    return(
        <div className="faq-support__container">
            <div className="faq-support__card">
                <div className="faq-support__title"> FAQ </div>
                <Questions/>
            </div>
        </div>
    );
};

export default FAQCardView; 