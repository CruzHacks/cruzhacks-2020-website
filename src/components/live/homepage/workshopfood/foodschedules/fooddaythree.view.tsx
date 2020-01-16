import React from 'react';
import { DayThreeFood } from '../schedules/schedules';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const FoodDayThreeView: React.FC = () => {

    const FoodView = () => {
        return(
            <div className="food-schedule-three__food-container">
                <PerfectScrollbar>
                    {DayThreeFood.map(event => (
                        <div className="food-schedule-three__food" key={event.food}>
                            <span className="food-schedule-three__food-type-and-time"> {event.typeAndTime} </span>
                            <span className="food-schedule-three__food-place">{event.food}</span>
                            <div className="food-schedule-three__food-description-container">
                                {event.description.map(descript => (
                                    <span className="food-schedule-three__food-description" key={descript}> {descript} </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </PerfectScrollbar>        
            </div>
        );
    };

    return(
        <div className="food-schedule-three__container">
            <span className="food-schedule-three__date">Sunday, January 19th</span>
            <div className="food-schedule-three__line-break"></div>
            <FoodView />
        </div>
    ); 
};

export default FoodDayThreeView;