import React from 'react';
import { ReactComponent as GreenWaves } from './greenWaves.svg';

const BackdropView: React.FC = () => {
  return (
    <>
      <div className="post-landing-projects__backdrop">
        <div className="post-landing-projects__backdrop--purpleWaves" />
        <GreenWaves />
      </div>
    </>
  );
};

export default BackdropView;
