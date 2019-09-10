import React from 'react';

import WelcomeTitleView from './title/welcome-title.view';
import WelcomeCardsView from './cards/welcome-cards.view';
import WelcomeBackdropView from './backdrop/welcome-backdrop.view';

const WelcomeView: React.FC = () => {
    return (
        <div className="welcome-view-container">
                <WelcomeBackdropView />
                <WelcomeTitleView />
                <WelcomeCardsView/>
        </div>
    );
};

export default WelcomeView;