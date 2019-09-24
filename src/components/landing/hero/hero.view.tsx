import React from 'react';

import HeroHeaderView from './header/hero-header.view';
import HeroTitleAreaView from './title-area/hero-title-area.view';

const HeroView: React.FC = () => {
  return (
    <>
      <section className="hero__container">
        <HeroHeaderView />
        <HeroTitleAreaView />
      </section>
    </>
  );
};

export default HeroView;
