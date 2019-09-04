import React from 'react';
<<<<<<< HEAD:src/components/hero/hero.view.tsx
import HeroLightBulb from './hero-lightbulb.view';
import HeroNavbarView from './navbar/hero-navbar.view';
import HeroMlhBadgeView from './hero-mlh-badge.view';
import HeroTitleView from './hero-title.view';
import HeroSloganView from './hero-slogan.view';
import './hero.sass';
=======
import HeroHeaderView from './header/hero-header.view';
import HeroTitleAreaView from './title-area/hero-title-area.view';
import HeroRightSideView from './backdrop/hero-rightside.view';
import HeroBackdropView from './backdrop/hero-backdrop.view';
>>>>>>> 9502555... Styles centralized to assets/styles folder with a base.scss file that imports all styles to be accessed globally. Refactored code for landing page. Landing page is still WIP, but I'm happy with the overall app structure at this point. Ready to merge with master.:src/components/landing/hero/hero.view.tsx

const HeroView: React.FC = () => {
  return (
    <>
<<<<<<< HEAD:src/components/hero/hero.view.tsx
      <div className="hero__header-container">
        <HeroLightBulb />
        <HeroNavbarView />
        <HeroMlhBadgeView />
      </div>
      <HeroTitleView />
      <HeroSloganView />
=======
      <HeroHeaderView />
      <HeroTitleAreaView />
      <HeroRightSideView />
      <HeroBackdropView />
>>>>>>> 9502555... Styles centralized to assets/styles folder with a base.scss file that imports all styles to be accessed globally. Refactored code for landing page. Landing page is still WIP, but I'm happy with the overall app structure at this point. Ready to merge with master.:src/components/landing/hero/hero.view.tsx
    </>
  );
};

export default HeroView;
