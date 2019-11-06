/*
    TODO: Add all Backdrop views into this component.
*/

import React from 'react';

/* Hero Section */
import BackdropHeroRightSideView from './backdrop/landing/hero/backdrop-hero-rightside.view';
import BackdropHeroAllPillars from './backdrop/landing/hero/backdrop-hero-all-pillars.view';

/* About Section */
import BackdropAboutLaptopView from './backdrop/about/backdrop-about-laptop.view';

/* Welcome Section */
import WelcomeMoutainView from './backdrop/welcome/backdrop-welcome-mountain.view';
import WelcomePillarsView from './backdrop/welcome/backdrop-welcome-pillars.view';

/* CTA Section */
import BackdropCtaView from './backdrop/cta/backdrop-cta.view';

/* Footer Section */
import BackdropFooterExtendedView from './backdrop/footer/backdrop-footer-extended.view';
import FooterView from './footer/footer.view';

const BackdropView: React.FC = () => {
  return (
    <>
      <div className="background__container">
        <div className="hero-backdrop__container">
          <BackdropHeroAllPillars />
          <BackdropHeroRightSideView />
        </div>
        <div className="about-backdrop__container">
          <BackdropAboutLaptopView />
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
        </div>
        <FooterView />
      </div>
    </>
  );
};

export default BackdropView;

/*
width="816" height="1138"
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
