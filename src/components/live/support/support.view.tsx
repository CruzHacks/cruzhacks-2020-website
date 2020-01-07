import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'
import SlackCardView from './slack/slack.view';

const SupportView: React.FC = () => {
    return (
        <div className="support__container">
            <Backdrop />
            <Navbar />
            <div className="support__title">
                Support and FAQ
            </div>
            <SlackCardView />
        </div>
    );
};

export default SupportView; 