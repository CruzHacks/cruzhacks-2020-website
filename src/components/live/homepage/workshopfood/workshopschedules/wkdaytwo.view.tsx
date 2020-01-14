import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

const WorkshopsDayTwoView: React.FC = () => {
    return(
        <div className="workshop-schedule-two__container">
            <span className="workshop-schedule-two__date">
                Saturday, January 18th
            </span>
            <div className="workshop-schedule-two__line-break"></div>
            <div className="workshop-schedule-two__events-container">
                <PerfectScrollbar>
                    <div className="workshop-schedule-two__events">
                        <span className="workshop-schedule-two__event-title">Intro to Git</span>
                        <span className="workshop-schedule-two__event-location">
                            Stevenson Room 240
                            <span className="workshop-schedule-two__event-time">10:00pm-10:30pm</span>
                        </span>
                        <span className="workshop-schedule-two__event-difficulty">Beginner</span>
                    </div>
                </PerfectScrollbar>
            </div>
        </div>
    );
};

export default WorkshopsDayTwoView; 