import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
// import HeroNavbarView from './navbar/hero-navbar.view';
import HeroHamburgerView from './hero-hamburger.view';
// import HeroMlhBadgeView from './hero-mlh-badge.view';

const HeroHeaderView: React.FC = () => {
  return (
    <div className="hero__header">
      <HeroLightBulb />
      <HeroHamburgerView />
    </div>
  );
};

export default HeroHeaderView;
