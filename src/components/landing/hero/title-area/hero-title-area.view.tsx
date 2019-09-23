import React from 'react';
import HeroNavigateToBottomButtonView from './hero-navigate-to-bottom-button.view';

const HeroTitleAreaView: React.FC = () => {
  return (
    <div className="hero-title-area">
      <div className="hero-title-area__title">
        <h1 className="hero-title-area__title-text">cruzhacks 2020</h1>
      </div>
      <div className="hero-title-area__slogan">
        <p className="hero-title-area__slogan-text">you.belongHere();</p>
      </div>
      <div className="hero-title-area__eventInfo">
        <div className="hero-title-area__eventInfo-text">
          <p>// January 19-21st, 2020</p>
          <p>// Stevenson Event Center, UC Santa Cruz</p>
          <p>// Applications Release Nov.</p>
        </div>
      </div>
      <div className="hero-title-area__button">
        <p className="hero-title-area__button-text">SPONSOR US</p>
      </div>
      <HeroNavigateToBottomButtonView />
    </div>
  );
};

export default HeroTitleAreaView;
