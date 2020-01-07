import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'
import QuestionView from './question/question.view'

const LiveHomepage: React.FC = () => {
    return (
        <div className="homepage__container">
            <Backdrop />
            <Navbar />
            <div className="homepage__title">
                CruzHacks 2020 Live
            </div>
            <div className="homepage__updates-card-container">
                <div className="homepage__updates-card">
                    <span className="homepage__live-update-title">
                        <span className="homepage__live-update-blinker"></span>
                        Live Updates
                    </span>
                </div>
            </div>
            <div className="homepage__gen-schedule-card-container">
                <div className="homepage__gen-schedule-card">
                    <span className="homepage__general-schedule-title">General Schedule</span>
                </div>
            </div>
            <div className="homepage__workshops-card-container">
                <div className="homepage__workshops-card">
                    <span className="homepage__workshops-title">Workshops</span>
                </div>
            </div>
            <QuestionView />
        </div>
    );
};

export default LiveHomepage; 