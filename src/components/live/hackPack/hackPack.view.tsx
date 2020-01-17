import React from 'react';
import Navbar from '../navbar/navbar.view';
import Backdrop from '../background/backdrop.view';
import HackerPacketCardView from './hackerPacket/hackerpacket.view';
import CrowdForgeCardView from './crowdforge/crowdforge.view';
import DevpostCardView from './devpost/devpost.view';
import EventInfoCardView from './eventInfo/eventInfo.view';

const HackPackView: React.FC = () => {
  return (
    <div className="hackpack__container">
      <div className="hackpack__cards-container">
        <Backdrop />
        <Navbar />
        <span className="hackpack__title">Everything you need here.</span>
        <HackerPacketCardView />
        <CrowdForgeCardView />
        <DevpostCardView />
        <EventInfoCardView />
      </div>
    </div>
  );
};

export default HackPackView;
