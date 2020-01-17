import React from 'react';

const HackerPacketCardView: React.FC = () => {
    return(
        <div className="hacker-packet__container">
            <div className="hacker-packet__card">
                <span className="hacker-packet__slug-on">
                    Ready to get your slug on?
                </span>
                <span className="hacker-packet__title">
                    Hacker Packet
                </span>
                <span className="hacker-packet__info">
                    You can find everything you need to know in our hacker packet PDF. 
                    It covers what you need to bring, travel info, workshop info, and more.
                </span>
                <div className="hacker-packet__link-container">
                    <a className="hacker-packet__packet" href="https://github.com/CruzHacks/Cruzhacks-Hacker-Packs" target="_blank" rel="noopener noreferrer">View Hacker Packet</a>
                </div>
            </div>
        </div>
    );
};

export default HackerPacketCardView;