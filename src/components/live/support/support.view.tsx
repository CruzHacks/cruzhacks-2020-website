import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'

const SupportView: React.FC = () => {
    return (
        <div className="support__container">
            <Backdrop />
            <Navbar />
            Hello Support View
        </div>
    );
};

export default SupportView; 