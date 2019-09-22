import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="join-our-mission__container">
      <div className="join-our-mission__title-container">
        <h1 className="join-our-mission__title">JOIN OUR MISSION</h1>
      </div>
      <div className="join-our-mission__description-container">
        <p className="join-our-mission__description">
          Cruzhacks is entirely student organized and run. This means
        </p>
        <p className="join-our-mission__description">
          support from industry mentors and volunteers is integral to the
        </p>
        <p className="join-our-mission__description">
          success of our event. Register to be a mentor or volunteer today!
        </p>
      </div>
      <div className="join-our-mission__button-container">
        <div className="join-our-mission__button--mentor">
          <p className="button__text">MENTOR</p>
        </div>
        <div className="join-our-mission__button--volunteer">
          <p className="button__text">VOLUNTEER</p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMissionView;
