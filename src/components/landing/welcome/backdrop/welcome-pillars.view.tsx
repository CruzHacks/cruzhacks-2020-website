import React from 'react';

import welcomePillars from '../../../../assets/images/welcome/Welcome-Pillars.svg';

const WelcomePillarsView: React.FC = () => {
    return (
        <img className="welcome-pillars__bd" src={welcomePillars} alt=""/>
    )
};

export default WelcomePillarsView;