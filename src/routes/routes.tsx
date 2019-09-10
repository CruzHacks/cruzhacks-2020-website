import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import landing view
import LandingView from '../components/landing/landing.view';

// import landing template data
import landingTemplate from '../components/landing/landing.template';

const Routes: React.FC = () => {
  return (
    <>
      <div className="routes">
        <Router>
          <Switch>
            <Route
              path="/"
              render={() => <LandingView data={landingTemplate} />}
            />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Routes;
