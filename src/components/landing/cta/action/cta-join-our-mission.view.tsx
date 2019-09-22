import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="cta__join-container">
      <div className="cta__join-title-container">
        <h1 className="cta__join-title">JOIN OUR MISSION</h1>
      </div>
      <div className="cta__join-description-container">
        <p className="cta__join-description">
          Cruzhacks is entirely student organized and run. This means
        </p>
        <p className="cta__join-description">
          support from industry mentors and volunteers is integral to the
        </p>
        <p className="cta__join-description">
          success of our event. Register to be a mentor or volunteer today!
        </p>
      </div>
      <div className="cta__button-container">
        <div className="cta__button--mentor">
          <p className="cta__button-text">MENTOR</p>
        </div>
        <div className="cta__button--volunteer">
          <p className="cta__button-text">VOLUNTEER</p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMissionView;
