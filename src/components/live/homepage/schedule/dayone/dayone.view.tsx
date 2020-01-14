import React from 'react';

const DayOneSchedule: React.FC = () => {
  return (
    <div className="day-one__schedule">
      <span className="day-one__title">Friday, January 17th</span>
      <div className="day-one__line-break"></div>
      <div className="day-one__events-container">
        <div className="day-one__events">
          <span className="day-one__events-title">Hacker Registration</span>
          <span className="day-one__events-time">5:00 pm</span>
        </div>
        <div className="day-one__events">
          <span className="day-one__events-title">Dinner</span>
          <span className="day-one__events-time">5:00 pm</span>
        </div>
        <div className="day-one__events">
          <span className="day-one__events-title">Opening Ceremony</span>
          <span className="day-one__events-time">7:00 pm</span>
        </div>
        <div className="day-one__events">
          <span className="day-one__events-title">Hacking Begins</span>
          <span className="day-one__events-time">9:00 pm</span>
        </div>
      </div>
    </div>
  );
};

export default DayOneSchedule;
