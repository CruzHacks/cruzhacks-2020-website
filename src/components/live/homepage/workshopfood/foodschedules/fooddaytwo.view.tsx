import React from 'react';
import { DayTwoFood } from '../schedules/schedules';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const FoodDayTwoView: React.FC = () => {

    const FoodView = () => {
        return(
            <div className="food-schedule-two__food-container">
                <PerfectScrollbar>
                    {DayTwoFood.map(event => (
                        <div className="food-schedule-two__food" key={event.food}>
                            <span className="food-schedule-two__food-type-and-time"> {event.typeAndTime} </span>
                            <span className="food-schedule-two__food-place">{event.food}</span>
                            <div className="food-schedule-two__food-description-container">
                                {event.description.map(descript => (
                                    <span className="food-schedule-two__food-description"> {descript} </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </PerfectScrollbar>
            </div>
        );
    };

    return(
        <div className="food-schedule-two__container">
            <span className="food-schedule-two__date">Saturday, January 18th</span>
            <div className="food-schedule-two__line-break"></div>
            <FoodView/>
        </div>
    ); 
};

export default FoodDayTwoView;