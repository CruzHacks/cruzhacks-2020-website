import React from 'react';

const CrowdForgeCardView: React.FC = () => {
  return (
    <div className="crowd-forge__container">
      <div className="crowd-forge__card">
        <span className="crowd-forge__find-team">Find a team to Join</span>
        <span className="crowd-forge__title">CrowdForge</span>
        <div className="crowd-forge__instructions">
          <span className="crowd-forge__line-one-description">
            Join or create your own team using CrowdForge.
          </span>
          <span className="crowd-forge__guidelines">
            Team Formation Guidelines:
          </span>
          <ul>
            <li className="crowd-forge__item">
              Must be comprised of 2-5 people
            </li>
            <li className="crowd-forge__item">
              The project must completed at the event
            </li>
          </ul>
        </div>
        <div className="crowd-forge__link-container">
          <a
            className="crowd-forge__team-link"
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
