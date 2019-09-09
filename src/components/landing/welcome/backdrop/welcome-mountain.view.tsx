import React from 'react';

import welcomeMountain from '../../../../assets/images/welcome/Welcome-Background-Mountain.svg';

const WelcomeMountainView: React.FC = () => {
    return (
        <img className="welcome-mountain__bd" src={welcomeMountain} alt=""/>
    );
};

export default WelcomeMountainView;