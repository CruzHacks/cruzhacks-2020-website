import React from 'react';

// import landing views
import HeroView from './hero/hero.view';
import StatsView from './stats/stats.view';
import AboutView from './about/about.view';

type LandingProps = {
  text: {
    name: any;
  }[];
};

type Component = {
  name: any;
};

const LandingView: React.FC<LandingProps> = props => {
  let componentImport = (component: Component) => ({
    HeroView: <HeroView {...component.name} />,
    AboutView: <AboutView {...component.name} />,
    StatsView: <StatsView {...component.name} />,
  });
  return (
    <>
      <div className="landing">
        {props.text.slice(0).map(component => componentImport(component))}
      </div>
    </>
  );
};

export default LandingView;
