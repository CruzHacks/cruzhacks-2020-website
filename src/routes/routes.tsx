import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LandingView from '../components/landing/landing.view';
import TeamView from '../components/team/team.view';
import PortalView from '../components/portal/portal.view';
import PrivateRoute from './private-route';
import LoadingView from '../components/misc/loading.view';
import LiveHomepage from '../components/live/homepage/homepage.view';
import MapPage from '../components/live/mapPage/map.view'
import HackPackView from '../components/live/hackPack/hackPack.view'
import SupportView from '../components/live/support/support.view'
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
            <Route exact path="/live" render={() => <LiveHomepage />} />
            <Route exact path="/live/map" render={() => <MapPage />} />
            <Route exact path="/live/hackpack" render={() => <HackPackView />} />
            <Route exact path="/live/support" render={() => <SupportView />} />
          </Switch>
        </Router>
      </div>
    </Router>
  );
};

export default Routes;
