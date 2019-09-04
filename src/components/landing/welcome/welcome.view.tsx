import React from 'react';

import WelcomeTitleView from './welcome-title.view';
import WelcomeBackdropView from './welcome-backdrop.view';
import WelcomeCardRowView from './welcome-card-row.view'

const WelcomeView: React.FC = () => {
    return (
        <>
            <div className="welcome-container">
                <WelcomeTitleView />
                <WelcomeBackdropView />
                <WelcomeCardRowView />
            </div>
        </>
    );
};

export default WelcomeView;