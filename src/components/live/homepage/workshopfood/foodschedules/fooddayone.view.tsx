import React from 'react';
import { DayOneFood } from '../schedules/schedules';

const FoodDayOneView: React.FC = () => {
  const FoodView = () => {
    return (
      <div className="food-schedule-one__food-container">
        {DayOneFood.map(event => (
          <div className="food-schedule-one__food" key={event.food}>
            <span className="food-schedule-one__food-type-and-time">
              {' '}
              {event.typeAndTime}{' '}
            </span>
            <span className="food-schedule-one__food-place">{event.food}</span>
            <div className="food-schedule-one__food-description-container">
              {event.description.map(descript => (
                <span
                  className="food-schedule-one__food-description"
                  key={descript}
                >
                  {' '}
                  {descript}{' '}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="food-schedule-one__container">
      <span className="food-schedule-one__date">Friday, January 17th</span>
      <div className="food-schedule-one__line-break"></div>
      <FoodView />
    </div>
  );
};

export default FoodDayOneView;
