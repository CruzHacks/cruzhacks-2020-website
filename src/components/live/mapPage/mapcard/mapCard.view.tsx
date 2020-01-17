import React from 'react';
import CruzHacksMap from '../../../../assets/live/map/cruzhacks-map.png';

const MapCardView: React.FC = () => {
    return(
        <div className="map-card__container">
            <div className="map-card__card">
                <div className="map-card__image-container-1">
                    <img src={CruzHacksMap} alt="stevenson map 1" className="map-card__image"></img>
                </div>
            </div>
        </div>
    ); 
};

export default MapCardView;