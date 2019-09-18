import React from 'react';
import JoinOurMissionView from './cta-join-our-mission.view';
import SponsorUsView from './cta-sponsor-us.view';
import CtaBackdropView from './backdrop/cta-backdrop.view';

const CtaView: React.FC = () => {
  return (
    <div className="cta-view-container">
      <JoinOurMissionView />
      <SponsorUsView />
      <CtaBackdropView />
    </div>
  );
};

export default CtaView;
