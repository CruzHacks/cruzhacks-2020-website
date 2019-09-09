import React from 'react';
import HeroView from './hero/hero.view';
import StatView from './stat/stat.view';

const LandingViews: React.FC = () => {
  return (
    <>
      <div className="landing">
        <HeroView />
        <StatView />
      </div>
    </>
  );
};

export default LandingViews;
