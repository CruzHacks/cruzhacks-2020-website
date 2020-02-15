import React from 'react';
import Countdown from 'react-countdown-now';
import HeroSubscribeToEmailList from '../../../landing/hero/titleArea/hero-subscribe-to-email-list.view';

const TitleAreaView: React.FC = () => {
  return (
    <div className="hero-title-area">
      <div className="hero-title-area__title-text">
        cruzhacks 2020
        <div className="hero-title-area__slogan hero-title-area__slogan-text">
          you.belongHere();
        </div>
      </div>
      <HeroSubscribeToEmailList />
    </div>
  );
};

export default TitleAreaView;
