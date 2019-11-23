import React, { useEffect, Component } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../auth/auth';
import PortalView from '../components/portal/portal.view';
import LandingView from '../components/landing/landing.view';

type PrivateRouteProps = {
  component: any;
  path: string;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component,
  path,
  ...rest
}) => {
  const authContext = useAuth0()!;

  const { isAuthenticated, loginWithRedirect } = authContext;

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          redirect_uri: 'http://localhost:3000/portal', // only works for dev, need a condition to see if we're in prod
          appState: { targetUrl: path },
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  const render = () => (isAuthenticated === true ? component : <LandingView />);

  return <Route exact path="/portal" render={render} />;
};

export default PrivateRoute;
