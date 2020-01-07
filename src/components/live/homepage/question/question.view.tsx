import React from 'react';
import question from '../../../../assets/live/homepage/question.svg'

const QuestionView: React.FC = () => {
    return(
        <div className="questions__card-container">
                <div className="questions__card">
                    <span className="questions__title">Have a Question?</span>
                    <img src={question} className="questions__image" alt="question"></img>
                    <span className="questions__paragraph">
                        Our organizing team is available throughout the whole event. 
                        If there’s anything you need please contact us through slack or find an organizer in person.
                    </span>
                    <a className="questions__join-slack" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Join Our Slack</a>
                    <a className="questions__goto-hackpack" href="/live/hackpack" rel="noopener noreferrer">Go To Hack Pack</a>
                </div>
            </div>
    );
};

export default QuestionView;