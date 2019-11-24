import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingView from '../components/landing/landing.view';
import TeamView from '../components/team/team.view';
import PortalView from '../components/portal/portal.view';
import PrivateRoute from './private-route';
import LoadingView from '../components/misc/loading.view';
import { useAuth0 } from '../auth/auth';

const Routes: React.FC = () => {
  const { loading } = useAuth0()!;

  if (loading) {
    return <LoadingView />;
  }

  return (
    <Router>
      <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <LandingView />} />
            <Route exact path="/team" render={() => <TeamView />} />
            <PrivateRoute path="/portal" component={<PortalView />} />
          </Switch>
        </Router>
      </div>
    </Router>
  );
};

export default Routes;
