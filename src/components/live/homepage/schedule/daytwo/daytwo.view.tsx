import React from 'react';

const DayTwoSchedule: React.FC = () => {
    return(
      <div className="day-two__schedule">
        <span className="day-two__title">
          Saturday, January 18th
        </span>
        <div className="day-two__line-break"></div>
        <span className="day-two__workshop-annoucement">
          Workshops held throughout the day**
        </span>
        <div className="day-two__events-container">
          <div className="day-two__events">
            <span className="day-two__events-title">
              Breakfast
            </span>
            <span className="day-two__events-time">
              8:00 am
            </span>
          </div>
          <div className="day-two__events">
            <span className="day-two__events-title">
            Lunch
            </span>
            <span className="day-two__events-time">
              1:00 pm
            </span>
          </div>
          <div className="day-two__events">
            <span className="day-two__events-title">
            Dinner
            </span>
            <span className="day-two__events-time">
                5:30 pm
            </span>
          </div>
          <div className="day-two__events">
            <span className="day-two__events-title">
            Midnight Snack
            </span>
            <span className="day-two__events-time">
              12:00 am
            </span>
          </div>
        </div>
      </div>
    );
  };

export default DayTwoSchedule;