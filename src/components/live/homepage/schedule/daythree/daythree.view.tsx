import React from 'react';

const DayThreeSchedule: React.FC = () => {
  return (
    <div className="day-three__schedule">
      <span className="day-three__title">Sunday, January 19th</span>
      <div className="day-three__line-break"></div>
      <div className="day-three__events-container">
        <div className="day-three__events">
          <span className="day-three__events-title">Breakfast</span>
          <span className="day-three__events-time">8:00 am</span>
        </div>
        <div className="day-three__events">
          <span id="longEventTitle" className="day-three__events-title">
            Code Freeze: Submit Projects
          </span>
          <span className="day-three__events-time">10:00 am</span>
        </div>
        <div className="day-three__events">
          <span className="day-three__events-title">Lunch</span>
          <span className="day-three__events-time">1:00 pm</span>
        </div>
        <div className="day-three__events">
          <span className="day-three__events-title">Closing Ceremony</span>
          <span className="day-three__events-time">2:00 pm</span>
        </div>
        <div className="day-three__events">
          <span className="day-three__events-title">Hackathon Ends</span>
          <span className="day-three__events-time">4:00 pm</span>
        </div>
      </div>
    </div>
  );
};

export default DayThreeSchedule;
