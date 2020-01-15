import React from 'react';

const WorkshopsDayOneView: React.FC = () => {
    return(
        <div className="workshop-schedule-one__container">
            <span className="workshop-schedule-one__date">
                Friday, January 17th
            </span>
            <div className="workshop-schedule-one__line-break"></div>
            <div className="workshop-schedule-one__events-container">
                <div className="workshop-schedule-one__events">
                    <span className="workshop-schedule-one__event-title">Intro to Git</span>
                    <span className="workshop-schedule-one__event-location">
                        Stevenson Room 240
                        <span className="workshop-schedule-one__event-time">10:00pm-10:30pm</span>
                    </span>
                    <span className="workshop-schedule-one__event-difficulty">Beginner</span>
                </div>
            </div>
        </div>
    );
};

export default WorkshopsDayOneView;