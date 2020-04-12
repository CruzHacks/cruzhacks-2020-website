import React from 'react';
import HeroSubscribeToEmailList from '../../../landing/hero/titleArea/hero-subscribe-to-email-list.view';
import CTAbuttonView from '../../../controls/ctaButton';

const sponsorButtonProps = [
  {
    text: 'BRING YOUR COMPANY TO 2021',
    link: 'mailto:sponsor@cruzhacks.com',
    className: 'ctaButtonHero',
  },
];

const TitleAreaView: React.FC = () => {
  return (
    <>
      <div className="hero-title-area">
        <HeroSubscribeToEmailList />
        <div className="hero-title-area__title-text">
          cruzhacks 2020
          <div className="hero-title-area__slogan hero-title-area__slogan-text">
            you.belongHere();
          </div>
        </div>
        <CTAbuttonView info={sponsorButtonProps} />
      </div>
    </>
  );
};

export default TitleAreaView;
