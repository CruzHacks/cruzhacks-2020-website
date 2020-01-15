import React from 'react';

const SlackCardView: React.FC = () => {
    return(
        <div className="support-slack__container">
            <div className="support-slack__card">
                <span className="support-slack__annoucements">
                    Stay Updated with Annoucements
                </span>
                <div className="support-slack__title">
                    Join Our Slack
                </div>
                <span className="support-slack__description">
                    Slack will be our main form of communication through out the entire hackathon. 
                    Please join our slack to stay updated with annoucements and news!
                </span>
                <div className="support-slack__button-container">
                    <a 
                    className="support-slack__link" 
                    href="https://join.slack.com/t/cruzhacks-attendees20/shared_invite/enQtODg4NDcyNjE0ODQ5LWZhODhjNzQ3MDVmYmE1ZWYxMGIzZjNiMzZiZTJkNzcwNmE5NDQxNWFjZGJhMmYzM2RkMjk0MDhkNjU4N2ZmZTg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Join Our Slack
                    </a>
                </div>
            </div>
        </div>
    ); 
};

export default SlackCardView; 