import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
import HeroNavbarView from './navbar/hero-navbar.view';
import HeroMlhBadgeView from './hero-mlh-badge.view';

const HeroHeaderView: React.FC = () => {
  return (
    <div className="hero__header">
      <HeroLightBulb />
      <HeroNavbarView />
      <HeroMlhBadgeView />
    </div>
  );
};

export default HeroHeaderView;
