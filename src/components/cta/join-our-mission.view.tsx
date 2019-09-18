import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="join-our-mission-container">
      <div className="join-our-mission-container__title">
        <h1 className="join-our-mission-container__main">JOIN OUR MISSION</h1>
      </div>
      <div className="join-our-mission-container__description">
        <p className="join-our-mission-container__body">
          Cruzhacks is entirely student organized and run. This means
        </p>
        <p className="join-our-mission-container__body">
          support from industry mentors and volunteers is integral to the
        </p>
        <p className="join-our-mission-container__body">
          success of our event. Register to be a mentor or volunteer today!
        </p>
      </div>
      <div className="join-our-mission-container__button-container">
        <div className="join-our-mission-container__button button--mentor">
          <p className="button__text">MENTOR</p>
        </div>
        <div className="join-our-mission-container__button button--volunteer">
          <p className="button__text">VOLUNTEER</p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMissionView;
