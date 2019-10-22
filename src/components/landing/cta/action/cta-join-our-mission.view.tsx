import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="cta__join-container">
      <div className="cta__join-title-container">
        <h1 className="cta__join-title">JOIN OUR MISSION</h1>
      </div>
      <div className="cta__join-description-container">
        <span className="cta__join-description">
          Cruzhacks is entirely student organized and run. If you have
          experience in the industry, hackers at CruzHacks could use your
          support while building their projects! Student volunteers are also
          paramount to the event, helping with logistics. Consider registering
          as a mentor or volunteer!
        </span>
      </div>
      {/*<div className="cta__button-container">
        <div className="cta__button--mentor">
          <p className="cta__button-text">MENTOR</p>
        </div>
        <div className="cta__button--volunteer">
          <p className="cta__button-text">VOLUNTEER</p>
        </div>
      </div>*/}
    </div>
  );
};

export default JoinOurMissionView;
