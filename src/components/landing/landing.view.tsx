import React from 'react';
import HeroView from './hero/hero.view';

const LandingView: React.FC = () => {
  return (
    <div className="landing-view-container">
      <HeroView />
    </div>
  );
};

export default LandingView;
