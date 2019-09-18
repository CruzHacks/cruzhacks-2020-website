/*
    TODO: Add all Backdrop views into this component.
*/

import React from 'react';

/* Hero Section */
import BackdropHeroPillars from './backdrop/landing/hero/backdrop-hero-pillars.view';
import BackdropHeroRightSideView from './backdrop/landing/hero/backdrop-hero-rightside.view';

/* About Section */
import BackdropAboutLaptopView from './backdrop/about/backdrop-about-laptop.view';
import BackdropAboutPillarsView from './backdrop/about/backdrop-about-pillars.view';

/* Welcome Section */
import WelcomeMoutainView from './backdrop/welcome/backdrop-welcome-mountain.view';
import WelcomePillarsView from './backdrop/welcome/backdrop-welcome-pillars.view';

/* CTA Section */
import BackdropCtaView from './backdrop/cta/backdrop-cta.view';

/* Footer Section */
import BackdropFooterExtendedView from './backdrop/footer/backdrop-footer-extended.view';
import BackdropFooterPillarsView from './backdrop/footer/backdrop-footer-pillars.view';
import BackdropFooterTreeView from './backdrop/footer/backdrop-footer-trees.view';

const BackdropView: React.FC = () => {
    return (
        <>
            <div className="Backdrop__container">
                <div className="hero-backdrop__container">
                    <BackdropHeroPillars />
                    <BackdropHeroRightSideView />
                </div>
                <div className="about-backdrop__container">
                    <BackdropAboutLaptopView />
                    <BackdropAboutPillarsView />
                </div>
                <div className="welcome-backdrop__container">
                    <WelcomeMoutainView />
                    <WelcomePillarsView />
                </div>
                <div className="stats-backdrop__container"></div>
                <div className="cta-backdrop__container">
                    <BackdropCtaView />
                </div>
                <div className="faq-backdrop__container"></div>
                <div className="sponsors-backdrop__container"></div>
                <div className="footer-backdrop__container">
                    <BackdropFooterExtendedView />
                    <BackdropFooterPillarsView />
                    <BackdropFooterTreeView />
                </div>
            </div>
        </>
    );
};

export default BackdropView;

/*

<div className="about-backdrop__container">
                    <BackdropAboutLaptopView />
                    <BackdropAboutPillarsView />
                </div>

                <div className="welcome-backdrop__container">
                    <WelcomeMoutainView />
                    <WelcomePillarsView />
                </div>

                <div className="cta-backdrop__container">
                    <BackdropCtaView />
                </div>

                <div className="footer-backdrop__container">
                    <BackdropFooterExtendedView />
                    <BackdropFooterPillarsView />
                    <BackdropFooterTreeView />
                </div>

*/