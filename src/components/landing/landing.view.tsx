import React from 'react';
import HeroView from './hero/hero.view';
import FAQView from '../faq/faq.view'

const LandingView: React.FC = () => {
  return (
    <div className="landing-view-container">
      <HeroView />
    </div>
  );
};

export default LandingView;
