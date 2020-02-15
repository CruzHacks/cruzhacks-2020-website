import React from 'react';
import Navbar from './navbar/navbar.view';
import RightBackdrop from '../../../assets/postLanding/right-backdrop.svg';
import BackdropHeroAllPillars from '../../landing/background/backdrop/landing/hero/backdrop-hero-all-pillars.view';
import BackdropHeroRightSideView from '../../landing/background/backdrop/landing/hero/backdrop-hero-rightside.view';

const PostLandingHeroView: React.FC = () => {
  return (
    <>
      <div className="post-landing-hero__container">
        <BackdropHeroAllPillars />
        <BackdropHeroRightSideView />
        <Navbar />
        <div className="post-landing-hero__title-container">
          <span className="post-landing-hero__title">CruzHacks 2020</span>
          <span className="post-landing-hero__description">
            you.belongHere();
          </span>
          <a
            href="mailto:sponsor@cruzhacks.com"
            rel="noopener noreferrer"
            className="post-landing-hero__brand"
          >
            Bring Your Brand To 2020
          </a>
        </div>
      </div>
    </>
  );
};

export default PostLandingHeroView;
