import React from 'react';
import HeroHeaderView from './header/hero-header.view';
import HeroTitleAreaView from './title-area/hero-title-area.view';
import HeroRightSideView from './backdrop/hero-rightside.view';
import HeroBackdropView from './backdrop/hero-backdrop.view';

const HeroView: React.FC = () => {
  return (
    <div className="hero-view-container">
      <HeroHeaderView />
      <HeroTitleAreaView />
      <HeroRightSideView />
      <HeroBackdropView />
    </div>
  );
};

export default HeroView;
