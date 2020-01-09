import React from 'react';

interface faqs {
    [index: string]: {
      question: string;
      answer: any;
    }[];
  };


const FAQCardView: React.FC<faqs> = faqs => {

    function onToggle(questionNum: String){
        switch(questionNum) {
            case "one":
                var question = document.getElementById("faq-support__question1");
                // var answer = question.nextElementSibling;
        }
    }

    const Questions = () =>{
        return(
            <span className="faq-support__questions-grid">
                {faqs.qAndA.map(questions =>(
                    <button
                    className="faq-support__questions"
                    key={questions.question}
                    // onClick={() => onToggle()}
                  >
                    {questions.question}
                  </button>
                ))}
            </span>
        ); 
    }

    return(
        <div className="faq-support__container">
            <div className="faq-support__card">
                <div className="faq-support__title"> 
                    FAQ
                </div>
                <div className="faq-support__questions-container">
                    {/* <Questions /> */}
                    <button className="faq-support__question1" onClick={() => {
                        let question = document.getElementById("faq-support__question1")!;
                        // var answer = question.nextElementSibling;
                        console.log(question)
                    }}>
                        Are we allowed to build on past projects?
                    </button>
                    <div className="faq-support__answer-container">
                        <span className="faq-support__answer">
                            Ask team about this.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQCardView; 