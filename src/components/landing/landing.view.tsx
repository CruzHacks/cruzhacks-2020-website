import React from 'react';

import HeroView from './hero/hero.view';
import AboutView from './about/about.view';
import WelcomeView from './welcome/welcome.view';
import StatsView from './stats/stats.view';
import CtaView from './cta/cta.view';
import FAQView from './faq/faq.view';
import SponsorsView from './sponsors/sponsors.view';
import BackdropView from './background/background.view';

export const LandingView: React.FC = () => {
  return (
    <>
      <a
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
        id="mlh-trust-badge"
        target="__blank"
      >
        <img
          alt="Major League Hacking 2020 Hackathon Season"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
          id="mlh-trust-badge-img"
        />
      </a>
      <div className="landing__container">
        <BackdropView />
        <HeroView />
        <AboutView />
        <WelcomeView />
        <StatsView />
        <CtaView />
        <FAQView />
        <SponsorsView />
      </div>
    </>
  );
};

export default LandingView;
