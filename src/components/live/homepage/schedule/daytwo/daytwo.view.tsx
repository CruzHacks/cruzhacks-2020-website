import React from 'react';
import { GeneralDayTwo } from '../schedules/schedules';

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
          {
            GeneralDayTwo.map(event => (
              <div className="day-one__events">
                <span className="day-one__events-title">{event.title}</span>
                <span className="day-one__events-time">{event.time}</span>
              </div>
            ))
          }
        </div>
      </div>
    );
  };

export default DayTwoSchedule;