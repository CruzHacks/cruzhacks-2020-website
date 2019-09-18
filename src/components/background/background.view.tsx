/*
    TODO: Add all background views into this component.
*/

import React from 'react';

/* Hero Section */
import BackgroundHeroPillars from './backdrop/landing/hero/background-hero-pillars.view';
import BackgroundHeroRightSideView from './backdrop/landing/hero/background-hero-rightside.view';

/* About Section */
import BackgroundAboutLaptopView from './backdrop/about/background-about-laptop.view';
import BackgroundAboutPillarsView from './backdrop/about/background-about-pillars.view';

/* Welcome Section */
import WelcomeMoutainView from './backdrop/welcome/background-welcome-mountain.view';
import WelcomePillarsView from './backdrop/welcome/background-welcome-pillars.view';

/* CTA Section */
import BackgroundCtaView from './backdrop/cta/background-cta.view';

/* Footer Section */
import BackgroundFooterExtendedView from './backdrop/footer/background-footer-extended.view';
import BackgroundFooterPillarsView from './backdrop/footer/background-footer-pillars.view';
import BackgroundFooterTreeView from './backdrop/footer/background-footer-trees.view';

const BackgroundView: React.FC = () => {
    return (
        <>
            <div className="background__container">
                <div className="hero-backdrop__container">
                    <BackgroundHeroPillars />
                    <BackgroundHeroRightSideView />
                </div>
                <div className="about-backdrop__container">
                    <BackgroundAboutLaptopView />
                    <BackgroundAboutPillarsView />
                </div>
            </div>
        </>
    );
};

export default BackgroundView;

/*

<div className="about-backdrop__container">
                    <BackgroundAboutLaptopView />
                    <BackgroundAboutPillarsView />
                </div>

                <div className="welcome-backdrop__container">
                    <WelcomeMoutainView />
                    <WelcomePillarsView />
                </div>

                <div className="cta-backdrop__container">
                    <BackgroundCtaView />
                </div>

                <div className="footer-backdrop__container">
                    <BackgroundFooterExtendedView />
                    <BackgroundFooterPillarsView />
                    <BackgroundFooterTreeView />
                </div>

*/