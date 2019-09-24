import React from 'react';

import WelcomeCardsView from './cards/welcome-cards.view';

const WelcomeView: React.FC = () => {
  return (
    <div className="welcome__container">
      <WelcomeCardsView />
    </div>
  );
};

export default WelcomeView;
