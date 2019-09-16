import React from 'react';
import HeroView from './hero/hero.view';
import FAQView from '../faq/faq.view'

const LandingViews: React.FC = () => {
  return (
    <>
      <div className="landing">
        <HeroView/>
        <FAQView />
      </div>
    </>
  );
};

export default LandingViews;
