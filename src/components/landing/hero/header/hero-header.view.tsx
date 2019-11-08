import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
// import HeroNavbarView from './navbar/hero-navbar.view';
import HeroHamburgerView from './hero-hamburger.view';

const HeroHeaderView: React.FC = () => {
  return (
    <div className="hero__header">
      <HeroLightBulb />
      {/* <HeroNavbarView /> */}
      <HeroHamburgerView />
    </div>
  );
};

export default HeroHeaderView;
