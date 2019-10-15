import React from 'react';

import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import BackdropView from './background/background.view';
import AboutView from './about/about.view';
import WelcomeView from './welcome/welcome.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <div className="landing__container">
        <BackdropView />
        <HeroView />
        <AboutView />
        <WelcomeView />
      </div>
    </>
  );
};

export default LandingView;
