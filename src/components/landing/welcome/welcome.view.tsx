import React from 'react';

import WelcomeCardsView from './cards/welcome-cards.view';
import WelcomeTitleView from './text/welcome-title.view';
import WelcomeSubtitleView from './text/welcome-subtitle.view';

const WelcomeView: React.FC = () => {
  return (
    <div className="welcome__container">
      <div className="welcome__text-container">
        <WelcomeTitleView />
        <WelcomeSubtitleView />
      </div>
      <WelcomeCardsView />
    </div>
  );
};

export default WelcomeView;
