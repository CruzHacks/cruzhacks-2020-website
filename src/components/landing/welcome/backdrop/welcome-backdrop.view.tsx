import React from 'react';

import WelcomeMountainView from './welcome-mountain.view';
import WelcomePillarsView from './welcome-pillars.view';

const WelcomeBackdropView: React.FC = () => {
    return (
        <>
            <WelcomePillarsView/>
            <WelcomeMountainView/>
        </>
    );
};

export default WelcomeBackdropView;