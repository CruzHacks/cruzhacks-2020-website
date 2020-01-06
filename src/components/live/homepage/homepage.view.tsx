import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'
import Card from '../card/card.view'

const LiveHomepage: React.FC = () => {
    return (
        <div className="live__homepage-container">
            <Backdrop />
            <Navbar />
            <Card />
        </div>
    );
};

export default LiveHomepage; 