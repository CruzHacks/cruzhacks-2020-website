import React from 'react';
import JoinOurMissionView from './join-our-mission.view';
import SponsorUsView from './sponsor-us.view';

const CtaView: React.FC = () => {
  return (
    <div className="cta-view-container">
      <JoinOurMissionView />
      <SponsorUsView />
    </div>
  );
};

export default CtaView;
