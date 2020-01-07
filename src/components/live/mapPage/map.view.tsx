import React from 'react';
import Navbar from '../navbar/navbar.view'
import Backdrop from '../background/backdrop.view'

const MapPage: React.FC = () =>{
    return(
        <div className="liveMap__container">
            <Backdrop />
            <Navbar />
            <div className="liveMap__title">
                Venue Map
            </div>
        </div>
    );
};

export default MapPage; 