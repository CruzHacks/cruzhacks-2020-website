import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
import HeroNavbarView from '../navbar/hero-navbar.view';
import HeroMlhBadgeView from './hero-mlh-badge.view';
import './hero-header.scss';
// import '../hero.scss';

const HeroHeaderView: React.FC = () => {
  return (
    <div className="hero-header-container">
      <HeroLightBulb />
      <HeroNavbarView />
      <HeroMlhBadgeView />
    </div>
  );
};

export default HeroHeaderView;
