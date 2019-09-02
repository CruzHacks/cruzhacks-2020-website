import React from 'react';
import HeroLightBulb from './hero-lightbulb.view';
import HeroNavbarView from './hero-navbar.view';
import HeroMlhBadgeView from './hero-mlh-badge.view';
import HeroTitleView from './hero-title.view';
import HeroSloganView from './hero-slogan.view';
import HeroRightSideView from './hero-rightside.view';
import HeroInfoTextView from './hero-event-info-text.view';
import HeroSponsorUsButtonView from './hero-sponsor-us-button.view';
import HeroNavigateToBottomButton from './hero-navigate-to-bottom-button';
import HeroBackdropView from './backdrop/hero-backdrop.view';
import './hero.scss';

const HeroView: React.FC = () => {
  return (
    <>
      <div className="hero-header-container">
        <HeroLightBulb />
        <HeroNavbarView />
        <HeroMlhBadgeView />
      </div>
      <HeroTitleView />
      <HeroRightSideView />
      <HeroSloganView />
      <HeroInfoTextView />
      <HeroSponsorUsButtonView />
      <HeroNavigateToBottomButton />
      <HeroBackdropView />
    </>
  );
};

export default HeroView;

/*
<HeroTitleView />
<HeroSloganView />
*/
