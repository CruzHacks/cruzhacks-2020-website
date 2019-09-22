import React from 'react';
import JoinOurMissionView from './action/cta-join-our-mission.view';
import SponsorUsView from './action/cta-sponsor-us.view';

const CtaView: React.FC = () => {
  return (
    <div className="cta__container">
      <JoinOurMissionView />
      <SponsorUsView />
    </div>
  );
};

export default CtaView;
