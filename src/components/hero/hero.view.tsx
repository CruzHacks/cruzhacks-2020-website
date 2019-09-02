import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
import HeroNavbarView from './hero-navbar.view';
import HeroMlhBadgeView from './hero-mlh-badge.view';
import HeroTitleView from './hero-title.view';
import HeroSloganView from './hero-slogan.view';
import './hero.sass';

const HeroView: React.FC = () => {
  return (
    <>
      <div className="hero-header-container">
        <HeroLightBulb />
        <HeroNavbarView />
        <HeroMlhBadgeView />
      </div>
      <HeroTitleView />
      <HeroSloganView />
    </>
  );
};

export default HeroView;
