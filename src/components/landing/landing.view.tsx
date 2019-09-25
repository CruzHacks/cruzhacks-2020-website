import React from 'react';

import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import BackdropView from './background/background.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <div className="landing__container">
        <BackdropView />
        <HeroView />
      </div>
    </>
  );
};

export default LandingView;
