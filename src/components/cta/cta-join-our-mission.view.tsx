import React from 'react';

const JoinOurMissionView: React.FC = () => {
  return (
    <div className="join-our-mission">
      <div className="join-our-mission__title">
        <h1 className="join-our-mission__title-text">JOIN OUR MISSION</h1>
      </div>
      <div className="join-our-mission__description">
        <p className="join-our-mission__description-text">
          Cruzhacks is entirely student organized and run. This means
        </p>
        <p className="join-our-mission__description-text">
          support from industry mentors and volunteers is integral to the
        </p>
        <p className="join-our-mission__description-text">
          success of our event. Register to be a mentor or volunteer today!
        </p>
      </div>
      <div className="join-our-mission__button-container">
        <div className="join-our-mission__button button--mentor">
          <p className="join-our-mission__button-text">MENTOR</p>
        </div>
        <div className="join-our-mission__button button--volunteer">
          <p className="join-our-mission__button-text">VOLUNTEER</p>
        </div>
      </div>
    </div>
  );
};

export default JoinOurMissionView;
