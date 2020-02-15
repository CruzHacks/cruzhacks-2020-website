import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import LandingView from '../components/landing/landing.view';
import TeamView from '../components/team/team.view';
// import PortalView from '../components/portal/portal.view';
// import ExtendedAppPortalView from '../components/portal/extended-portal.view';
// import PrivateRoute from './private-route';
import LoadingView from '../components/misc/loading.view';
// import LiveHomepage from '../components/live/homepage/homepage.view';
// import SchedulePage from '../components/schedule/schedulepage.view';
// import MapPage from '../components/live/mapPage/map.view';
// import HackPackView from '../components/live/hackPack/hackPack.view';
// import SupportView from '../components/live/support/support.view';
// import AnnouncementsDashboard from '../components/announcements/announcements-dashboard.view';

import PostLandingView from '../components/postLanding/postLanding.view';
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
            <Route exact path="/" render={() => <PostLandingView />} />
            <Route exact path="/team" render={() => <TeamView />} />
            {/* <PrivateRoute path="/portal" component={<PortalView />} />
            <Route exact path="/schedule" render={() => <SchedulePage />} />
            <Route exact path="/live" render={() => <LiveHomepage />} />
            <Route exact path="/live/map" render={() => <MapPage />} />
            <Route
              exact
              path="/live/hackpack"
              render={() => <HackPackView />}
            />
            <Route exact path="/live/support" render={() => <SupportView />} />
            <PrivateRoute
              path="/extended-application"
              component={<ExtendedAppPortalView />}
            />
            <PrivateRoute
              path="/announcements"
              component={<AnnouncementsDashboard />}
            /> */}
          </Switch>
        </Router>
      </div>
    </Router>
  );
};

export default Routes;
