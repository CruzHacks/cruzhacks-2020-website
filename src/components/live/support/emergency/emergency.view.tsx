import React from 'react';

const EmergencyContactsCardView: React.FC = () => {
    return(
        <div className="emergency-contact__container">
            <div className="emergency-contact__card">
                <div className="emergency-contact__title">
                    Emergency Contacts
                </div>
                <div className="emergency-contact__police">
                    <span className="emergency-contact__police-title">
                        UC Police Dispatch
                    </span>
                    <span className="emergency-contact__police-number">
                        831-459-2231 ext 1
                    </span>
                </div>
                <div className="emergency-contact__fire">
                    <span className="emergency-contact__fire-title">
                        Santa Cruz Fire Department
                    </span>
                    <span className="emergency-contact__fire-number">
                        (831)420-5678
                    </span>
                </div>
                <div className="emergency-contact__jen">
                    <span className="emergency-contact__jen-title">
                        Jennifer Dutra (co-president)
                    </span>
                    <span className="emergency-contact__jen-number">
                        Contact via Slack
                    </span>
                </div>
                <div className="emergency-contact__daniel">
                    <span className="emergency-contact__daniel-title">
                        Daniel Segobiano (co-president)
                    </span>
                    <span className="emergency-contact__jen-number">
                        Contact via Slack
                    </span>
                </div>
            </div>
        </div>
    ); 
};

export default EmergencyContactsCardView;