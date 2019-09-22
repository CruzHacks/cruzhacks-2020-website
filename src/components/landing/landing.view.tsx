import React from 'react';

import HeroView from './hero/hero.view';
import AboutView from '../about/about.view';
import WelcomeView from '../welcome/welcome.view';
import StatsView from './stats/stats.view';
import CtaView from '../cta/cta.view';
import FAQView from '../faq/faq.view';
import SponsorsView from '../sponsors/sponsors.view';
import FooterView from '../footer/footer.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <div className="landing__container">
        <HeroView />
        <AboutView />
        <WelcomeView />
        <StatsView />
        <CtaView />
        <FAQView />
        <SponsorsView />
        <FooterView />
      </div>
    </>
  );
};

export default LandingView;
