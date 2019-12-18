import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="cta__join-container">
      <div className="cta__join-title-container">
        <h1 className="cta__join-title">JOIN OUR MISSION</h1>
      </div>
      <div className="cta__join-description-container">
        <span className="cta__join-description">
          CruzHacks is entirely student organized and run. If you have
          experience in the industry, hackers at CruzHacks could use your
          support while building their projects! Student volunteers are also
          paramount to the event, helping with logistics. Consider registering
          as a mentor or volunteer!
        </span>
      </div>
      <div className="cta__button-container">
        <a
          href="https://forms.gle/rP8MGCwRk9CTdKJ67"
          className="cta__button--mentor"
        >
          <p className="cta__button-text">HELP OUT</p>
        </a>
        <a
          href="https://docs.google.com/document/d/1OKiuYrZsPzP1XEfKzNmgSWOuz28rLjNouAEbiUGnSss/edit?usp=sharing"
          className="cta__button--volunteer"
        >
          <p className="cta__button-text">LEARN MORE</p>
        </a>
      </div>
    </div>
  );
};

export default JoinOurMissionView;
