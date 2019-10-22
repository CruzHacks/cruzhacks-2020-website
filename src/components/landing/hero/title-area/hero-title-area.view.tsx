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
        <p>// January 17-19th, 2020</p>
        <p>// Stevenson Event Center, UC Santa Cruz</p>
        <p>// Applications Release Nov.</p>
      </div>
      <div className="hero-title-area__button-container">
        <a
          href="https://2019.cruzhacks.com"
          className="hero-title-area__2019-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="hero-title-area__2019-button-text">
            <br />
            CHECK OUT 2019
          </p>
        </a>
        <a
          href="mailto:sponsor@cruzhacks.com"
          className="hero-title-area__sponsor-button"
        >
          <p className="hero-title-area__sponsor-button-text">SPONSOR US</p>
        </a>
      </div>
      <HeroSubscribeToEmailList />
    </div>
  );
};

export default HeroTitleAreaView;
