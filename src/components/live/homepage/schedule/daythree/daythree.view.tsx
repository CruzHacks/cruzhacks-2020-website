import React from 'react';
import { GeneralDayThree } from '../schedules/schedules';

const DayThreeSchedule: React.FC = () => {
  return (
    <div className="day-three__schedule">
      <span className="day-three__title">Sunday, January 19th</span>
      <div className="day-three__line-break"></div>
      <div className="day-three__events-container">
        {
          GeneralDayThree.map(event => (
            <div className="day-one__events">
              <span id={event.id} className="day-one__events-title">{event.title}</span>
              <span className="day-one__events-time">{event.time}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DayThreeSchedule;
