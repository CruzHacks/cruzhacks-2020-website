import React from 'react';
import LandingView from './components/landing/landing.view';
import AboutView from './components/about/about.view';
import WelcomeView from './components/welcome/welcome.view';
import SponsorsView from './components/sponsors/sponsors.view'
import FooterView from './components/footer/footer.view';

const App: React.FC = () => {
  return (
    <>
      <LandingView />
      <AboutView />
      <WelcomeView/>
      <SponsorsView/>
      <FooterView />
    </>
  );
};

export default App;

// <div className="test-container">Howdy Partner</div>
