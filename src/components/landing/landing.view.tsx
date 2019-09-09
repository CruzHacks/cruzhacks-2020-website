import React from 'react';
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';

const LandingViews: React.FC = () => {
  return (
    <>
      <div className="landing">
        <HeroView />
        <StatsView />
      </div>
    </>
  );
};

export default LandingViews;
