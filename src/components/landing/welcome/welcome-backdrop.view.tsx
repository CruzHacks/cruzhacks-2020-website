import React from 'react';

import WelcomeMountainView from './backdrop/welcome-mountain.view';
import WelcomePillarsView from './backdrop/welcome-pillars.view';

const WelcomeBackdropView: React.FC = () => {
    return (
        <>
            <WelcomeMountainView/>
            <WelcomePillarsView/>
        </>
    );
};

export default WelcomeBackdropView;