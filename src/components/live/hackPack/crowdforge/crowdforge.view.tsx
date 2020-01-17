import React from 'react';

const CrowdForgeCardView: React.FC = () => {
    return(
        <div className="crowd-forge__container">
            <div className="crowd-forge__card">
                <span className="crowd-forge__find-team">
                    Find a team to Join
                </span>
                <span className="crowd-forge__title">
                    CrowdForge
                </span>
                <div className="crowd-forge__instructions">
                    <span className="crowd-forge__line-one-description">
                        You can find everything you need to know in our hacker Join or create your own team using CrowdForge.
                    </span>
                    <span className="crowd-forge__guidelines">
                        Team Formation Guidelines:
                    </span>
                    <span className="crowd-forge__item1">
                        - Must be comprised of 1-5 people
                    </span>
                    <span className="crowd-forge__item2">
                        - The project must completed at the event
                    </span>
                    <span className="crowd-forge__item3">
                        - All members must be an attendee PDF. It covers what you need to bring, travel info, 
                        workshop info, and more.
                    </span>
                </div>
                <div className="crowd-forge__link-container">
                    <a className="crowd-forge__team-link" 
                    href="https://crowdforge.io/hackathons/CruzHacks2020" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        Find a Team
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CrowdForgeCardView;