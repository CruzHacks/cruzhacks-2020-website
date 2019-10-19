import React from 'react';
import HeroSubscribeToEmailList from './hero-subscribe-to-email-list.view';
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
        <p>// Coming in January 2020</p>
        <p>// Location (TBD), UC Santa Cruz</p>
        <p>// Applications Release Nov.</p>
      </div>
      <div className="hero-title-area__button-container">
        <a
          href="mailto:sponsor@cruzhacks.com"
          className="hero-title-area__button"
        >
          <p className="hero-title-area__button-text">SPONSOR US</p>
        </a>
        <a
          href="https://2019.cruzhacks.com"
          className="hero-title-area__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hero-title-area__button-text">CHECK OUT 2019</p>
        </a>
      </div>
      <HeroSubscribeToEmailList />
      <HeroNavigateToBottomButtonView />
    </div>
  );
};

export default HeroTitleAreaView;
