import React from 'react';
import { ReactComponent as Pillars } from './pillars.svg';
import { ReactComponent as Squiggle } from './squiggle.svg';

const ShareBackdropView: React.FC = () => {
  return (
    <>
      <div className="postLanding-share__backdrop">
        <div className="postLanding-share__pillars">
          <Pillars />
        </div>
        <div className="postLanding-share__squiggle">
          <Squiggle />
        </div>
      </div>
    </>
  );
};

export default ShareBackdropView;
