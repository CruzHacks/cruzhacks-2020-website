import React from 'react';

// import landing views
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import AboutView from './about/about.view';

// import landing data template
import landingTemplate from './landing.template';

const LandingView: React.FC = () => landingTemplate:{[index: string]: any} =>
    ({
      StatsView: <StatsView {...landingTemplate.props} />,
    }[landingTemplate.name]);
  return (
    <>
      <div className="landing">
        <HeroView />
        <AboutView />
        <StatsView stats={landingTemplate} />
      </div>
    </>
  );
};

export default LandingView;
