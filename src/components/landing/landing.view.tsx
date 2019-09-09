import React from 'react';
// import HeroView from './hero/hero.view';
import WelcomeView from './welcome/welcome.view';

const LandingViews: React.FC = () => {
  return (
    <>
      <div className="landing">
        <WelcomeView/>
      </div>
    </>
  );
};

export default LandingViews;
