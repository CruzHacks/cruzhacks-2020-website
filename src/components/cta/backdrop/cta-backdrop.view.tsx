import React from 'react';
import PorterSquiggleView from './cta-porter-squiggle.view';
import CtaPillarsView from './cta-pillars.view';

const CtaBackdropView: React.FC = () => {
  return (
    <div className="cta-backdrop-container">
      <PorterSquiggleView />
      <CtaPillarsView />
    </div>
  );
};

export default CtaBackdropView;

// <PorterSquiggleView />
