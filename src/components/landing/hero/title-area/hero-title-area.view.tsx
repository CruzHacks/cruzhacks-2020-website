import React from 'react';
import HeroNavigateToBottomButtonView from './hero-navigate-to-bottom-button.view';

const HeroTitleAreaView: React.FC = () => {
  return (
    <div className="hero-title-area">
      <div className="hero-title-area__title-text">
        cruzhacks 2020
        <div className="hero-title-area__slogan hero-title-area__slogan-text">
          you.belongHere();
        </div>
      </div>
      <div className="hero-title-area__eventInfo hero-title-area__eventInfo-text">
        <p>// January 19-21st, 2020</p>
        <p>// Stevenson Event Center, UC Santa Cruz</p>
        <p>// Applications Release Nov.</p>
      </div>
      <div className="hero-title-area__button">
        <p className="hero-title-area__button-text">SPONSOR US</p>
      </div>
      <HeroNavigateToBottomButtonView />
    </div>
  );
};

export default HeroTitleAreaView;
