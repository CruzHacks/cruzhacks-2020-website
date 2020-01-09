import React from 'react';
import StevensonMap1 from '../../../../assets/live/map/stevensonmap1.png';
import StevensonMap2 from '../../../../assets/live/map/stevensonmap2.png';

const MapCardView: React.FC = () => {
    return(
        <div className="map-card__container">
            <div className="map-card__card">
                <div className="map-card__image-container-1">
                    <img src={StevensonMap1} alt="stevenson map 1"></img>
                </div>
                <div className="map-card__image-container-2">
                    <img src={StevensonMap2} alt="stevenson map 2"></img>
                </div>
            </div>
        </div>
    ); 
};

export default MapCardView;