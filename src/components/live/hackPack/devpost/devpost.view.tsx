import React from 'react';

const DevpostCardView: React.FC = () => {
    return(
        <div className="devpost__container">
            <div className="devpost__card">
                <span className="devpost__submit-info">
                    Ready to Submit Your Project?
                </span>
                <div className="devpost__title">
                    Devpost
                </div>
                <span className="devpost__description">
                    Once your team is completed with your project, submit it to DevPost under the guidelines and rules.
                </span>
                <div className="devpost__link-container">
                    <a className="devpost__link" href="https://www.google.com" target="_blank" rel="noopener noreferrer">Submit Project</a>
                </div>
            </div>
        </div>
    );
};

export default DevpostCardView;