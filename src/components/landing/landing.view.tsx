import React from 'react';

// import landing views
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import AboutView from './about/about.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <div className="landing">
        <HeroView />
        <AboutView />
        <StatsView />
      </div>
    </>
  );
};

export default LandingView;
