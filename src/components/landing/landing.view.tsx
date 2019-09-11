import React from 'react';

// import landing views
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import AboutView from './about/about.view';

type LandingProps = {
  text: {
    name: string;
    props: any;
  }[];
};

const LandingView: React.FC<LandingProps> = props => {
  return (
    <>
      <div className="landing">
        <HeroView />
      </div>
    </>
  );
};

export default LandingView;
