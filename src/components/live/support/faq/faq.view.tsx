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
            <span className="faq-support__questions-grid">
                
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

                </div>
            </div>
        </div>
    );
};

export default FAQCardView; 