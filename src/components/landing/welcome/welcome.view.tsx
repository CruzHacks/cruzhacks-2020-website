import React from 'react';

import WelcomeCardsView from './cards/welcome-cards.view';
import WelcomeTitleView from './text/welcome-title.view';
import WelcomeSubtitleView from './text/welcome-subtitle.view';

const WelcomeView: React.FC = () => {
  return (
    <div className="welcome__container">
      <WelcomeTitleView />
      <WelcomeSubtitleView />
      <WelcomeCardsView />
    </div>
  );
};

export default WelcomeView;
