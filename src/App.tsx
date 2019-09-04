import React from 'react';
<<<<<<< HEAD
import Hero from './components/hero/hero.view';
=======
import LandingView from './components/landing/landing.view';
>>>>>>> 9502555... Styles centralized to assets/styles folder with a base.scss file that imports all styles to be accessed globally. Refactored code for landing page. Landing page is still WIP, but I'm happy with the overall app structure at this point. Ready to merge with master.

const App: React.FC = () => {
  return (
    <div className="app-root">
      <LandingView />
    </div>
  );
};

export default App;
