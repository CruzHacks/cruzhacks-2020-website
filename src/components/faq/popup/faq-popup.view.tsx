import React from 'react';

type AnswerProps = {
    question: string; 
    answer: string; 
    close(): any; 
}

export const FAQPopupView: React.FC<AnswerProps> = AnswerProps => {
    return(
        <div className="faq__popupContainer">
            <div className="faq__popupInner">
                <span className="faq__popupQuestion">{AnswerProps.question}</span>
                <span className="faq__popupAnswer">{AnswerProps.answer}</span>
                <button className="faq__popupExit" onClick={AnswerProps.close}>x</button>
            </div>
        </div>
    )
}

export default FAQPopupView;