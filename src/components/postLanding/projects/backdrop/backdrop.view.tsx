import React from 'react';
import { ReactComponent as GreenWaves } from './greenWaves.svg';
import { ReactComponent as PurpleWaves } from './purpleWaves.svg';

const BackdropView: React.FC = () => {
  return (
    <>
      <div className="post-landing-projects__backdrop">
        <PurpleWaves />
        <GreenWaves />
      </div>
    </>
  );
};

export default BackdropView;
