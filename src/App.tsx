import React from 'react';
import LandingView from './components/landing/landing.view';
import AboutView from './components/about/about.view';

const App: React.FC = () => {
  return (
    <div className="app-root">
      <LandingView />
      <AboutView />
    </div>
  );
};

export default App;

// <div className="test-container">Howdy Partner</div>
