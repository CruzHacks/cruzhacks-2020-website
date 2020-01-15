import React from 'react';

type CardInfo = {
    title: String; 
}

const Card: React.FC = () => {
    return (
        <div className="liveCard__container">
            <div className="liveCard__box">
            </div>
        </div>
    );
};

export default Card; 