import React from 'react';

import HeroView from './hero/hero.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <div className="landing__container">
        <HeroView />
      </div>
    </>
  );
};

export default LandingView;
