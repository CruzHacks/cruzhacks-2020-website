import React from 'react';

// import landing views
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import AboutView from './about/about.view';

type LandingProps = {
  componentText: {
    name: string;
    props: any;
  }[];
};

const LandingView: React.FC<LandingProps> = props => {
  let componentImport = c =>
    ({
      HeroView: <HeroView {...c.props} />,
      AboutView: <AboutView {...c.props} />,
      StatsView: <StatView {...c.props} />,
    }[c.name]);
  return (
    <>
      <div className="landing">
        {props.componentText.slice(0).map(c => componentImport(c))}
      </div>
    </>
  );
};

export default LandingView;
