import React from 'react'

import welcomeTitleHeader from '../../../../assets/images/welcome/Welcome_Welcome_Text.svg';
import welcomeTitleCaption from '../../../../assets/images/welcome/Welcome_Caption_Text.svg';

const WelcomeTitleView: React.FC = () => {
    return (
        <>
            <div className="welcome-title__container">
                <img className="welcome-title__header" src={welcomeTitleHeader} alt="" />
                <img className="welcome-title__caption" src={welcomeTitleCaption} alt="" />
            </div>
        </>
    );
};

export default WelcomeTitleView;