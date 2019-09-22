import React from 'react';

import WelcomeTitleView from './title/welcome-title.view';
import WelcomeCardsView from './cards/welcome-cards.view';

const WelcomeView: React.FC = () => {
  return (
    <div className="welcome-view__container">
      <WelcomeTitleView />
      <WelcomeCardsView />
    </div>
  );
};

export default WelcomeView;
