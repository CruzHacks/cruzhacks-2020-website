import React from 'react';

const WorkshopsDayThreeView: React.FC = () => {
    return(
        <div className="workshop-schedule-three__container">
            <span className="workshop-schedule-three__date">
                Sunday, January 19th
            </span>
            <div className="workshop-schedule-three__line-break"></div>
            <div className="workshop-schedule-three__events-container">
                <div className="workshop-schedule-three__events">
                    <span className="workshop-schedule-three__event-title">No Workshops Held Today</span>
                </div>
            </div>
        </div>
    );
};

export default WorkshopsDayThreeView; 