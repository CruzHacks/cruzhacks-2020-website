import React from 'react';
import HeroView from './hero/hero.view';

const LandingViews: React.FC = () => {
  return (
    <>
      <div className="landing">
        <HeroView />
      </div>
    </>
  );
}

export default LandingViews;