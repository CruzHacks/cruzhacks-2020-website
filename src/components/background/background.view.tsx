/*
    TODO: Add all background views into this component.
*/

import React from 'react';

import WelcomeMoutainView from './backdrop/welcome/background-welcome-mountain.view';
import WelcomePillarsView from './backdrop/welcome/background-welcome-pillars.view';

const BackgroundView : React.FC = () => {
    return (
        <>
            <WelcomeMoutainView/>
            <WelcomePillarsView />
        </>
    );
};

export default BackgroundView;