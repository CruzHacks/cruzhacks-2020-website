import React from 'react';
import Navbar from '../navbar/navbar.view';
import Backdrop from '../background/backdrop.view';
import HackerPacketCardView from './hackerPacket/hackerpacket.view';
import CrowdForgeCardView from './crowdforge/crowdforge.view'

const HackPackView: React.FC = () => {
    return (
        <div className="hackpack__container">
            <Backdrop />
            <Navbar />
            <span className="hackpack__title">Everything you need here.</span>
            <HackerPacketCardView />
            <CrowdForgeCardView />
        </div>
    );
};

export default HackPackView; 