import React from 'react';
import RightBackdrop from '../../../assets/postLanding/right-backdrop.svg';
import BackdropHeroAllPillars from '../../landing/background/backdrop/landing/hero/backdrop-hero-all-pillars.view';
import BackdropHeroRightSideView from '../../landing/background/backdrop/landing/hero/backdrop-hero-rightside.view';
import TitleAreaView from './titleArea/titleArea.view';
import HeroHeaderView from '../../landing/hero/header/hero-header.view';
import HeroHamburgerView from '../../landing/hero/header/hero-hamburger.view';
import HeroNavbarView from '../../landing/hero/header/navbar/hero-navbar.view';
import NavbarView from './navbar/navbar.view';

const PostLandingHeroView: React.FC = () => {
  return (
    <>
      <div className="post-landing-hero__container">
        <div className="post-landing-hero__bg">
          <BackdropHeroRightSideView />
        </div>
        <div className="post-landing-hero__pillars">
          <BackdropHeroAllPillars />
        </div>

        {/* Placeholder */}
        <HeroHamburgerView />
        {/* Placeholder */}

        <NavbarView />
        <div className="post-landing-hero__title-container">
          <TitleAreaView />
        </div>
      </div>
    </>
  );
};

export default PostLandingHeroView;