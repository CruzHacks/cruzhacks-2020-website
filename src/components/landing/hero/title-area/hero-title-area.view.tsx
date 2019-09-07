import React from 'react';
import HeroTitleView from './hero-title.view';
import HeroSloganView from './hero-slogan.view';
import HeroEventInfoTextView from './hero-event-info-text.view';
import HeroSponsorUsButtonView from './hero-sponsor-us-button.view';
import HeroNavigateToBottomButtonView from './hero-navigate-to-bottom-button';

const HeroTitleAreaView: React.FC = () => {
  return (
    <div className="hero-title-area-view-container">
      <HeroTitleView />
      <HeroSloganView />
      <HeroEventInfoTextView />
      <HeroSponsorUsButtonView />
      <HeroNavigateToBottomButtonView />
    </div>
  );
};

export default HeroTitleAreaView;
