import React from 'react';
import { GeneralDayOne } from '../schedules/schedules';

const DayOneSchedule: React.FC = () => {
  return (
    <div className="day-one__schedule">
      <span className="day-one__title">Friday, January 17th</span>
      <div className="day-one__line-break"></div>
      <div className="day-one__events-container">
        {
          GeneralDayOne.map(event => (
            <div className="day-one__events" key={event.title}>
              <span className="day-one__events-title">{event.title}</span>
              <span className="day-one__events-time">{event.time}</span>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default DayOneSchedule;
