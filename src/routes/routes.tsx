import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import landing view
import LandingView from '../components/landing/landing.view';

// import landing text template
// import landingTemplate from '../components/landing/landing.template';

const Routes: React.FC = () => {
  return (
    <>
      <div className="routes">
        <Router>
          <Switch>
            <Route path="/" render={() => <LandingView />} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Routes;
