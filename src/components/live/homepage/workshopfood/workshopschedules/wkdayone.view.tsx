import React from 'react';
import { DayOneWorkshops } from '../schedules/schedules'

const WorkshopsDayOneView: React.FC = () => {
    
    const WorkshopsView = () => {
        return(
            <div className="workshop-schedule-one__events-container">
                {DayOneWorkshops.map(event =>(
                    <div className="workshop-schedule-one__events" key={event.title}>
                        <span className="workshop-schedule-one__event-title">{event.title}</span>
                        <span className="workshop-schedule-one__event-location">
                            {event.location}
                                <span className="workshop-schedule-one__event-time">{event.time}</span>
                        </span>
                        <span className="workshop-schedule-one__event-difficulty">{event.difficulty}</span>
                    </div>
                ))}
            </div>
        );
    };
    
    return(
        <div className="workshop-schedule-one__container">
            <span className="workshop-schedule-one__date">
                Friday, January 17th
            </span>
            <div className="workshop-schedule-one__line-break"></div>
            <WorkshopsView/>
        </div>
    );
};

export default WorkshopsDayOneView;