import React from 'react';
import { DayTwoWorkshops } from '../schedules/schedules';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const WorkshopsDayTwoView: React.FC = () => {

    const WorkshopView = () => {
        return(
            <div className="workshop-schedule-two__events-container">
                <PerfectScrollbar>
                    {DayTwoWorkshops.map(event => (
                        <div className="workshop-schedule-two__events" key={event.title}>
                        <span className="workshop-schedule-two__event-title">{event.title}</span>
                        <span className="workshop-schedule-two__event-location">
                            {event.location}
                            <span className="workshop-schedule-two__event-time">{event.time}</span>
                        </span>
                        <span className="workshop-schedule-two__event-difficulty">{event.difficulty}</span>
                    </div>
                    ))}
                </PerfectScrollbar>
            </div>
        );
    }

    return(
        <div className="workshop-schedule-two__container">
            <span className="workshop-schedule-two__date">
                Saturday, January 18th
            </span>
            <div className="workshop-schedule-two__line-break"></div>
            <WorkshopView />
        </div>
    );
};

export default WorkshopsDayTwoView; 