import React from 'react';
import topSVG from '../../../assets/live/topSVG.svg';

const Backdrop: React.FC = () => {
    return(
        <div className="liveBackground__container">
            <div className="liveBackground__backdropImage">
                <img src={topSVG} alt="Top SVG" className="liveBackground__image"/>
            </div>
        </div>
    );
};

export default Backdrop;