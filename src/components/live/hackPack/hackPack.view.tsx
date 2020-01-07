import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'

const HackPackView: React.FC = () => {
    return (
        <div className="hackpack__container">
            <Backdrop />
            <Navbar />
            Hello Hack Pack
        </div>
    );
};

export default HackPackView; 