import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import landing view
import LandingView from '../components/landing/landing.view';
import TeamView from '../components/team/team.view';

// import landing text template
// import landingTemplate from '../components/landing/landing.template';

const Routes: React.FC = props => {
  return (
    <>
      <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <LandingView />} />
            <Route exact path="/team" render={() => <TeamView />} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Routes;
