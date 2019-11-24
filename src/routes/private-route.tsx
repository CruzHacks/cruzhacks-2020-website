import React, { useEffect, Component } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../auth/auth';
import LandingView from '../components/landing/landing.view';
// import signInConfig from '../auth/auth-signin-config.json'; [I may want to use this later]

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

  // redirect_uri: process.env.REACT_APP_REDIRECT_URI || 'http://localhost:3000/portal',

  useEffect(() => {
    const fn = async () => {
      if (!isAuthenticated) {
        await loginWithRedirect({
          appState: { targetUrl: path }, // params: JSON.stringify(signInConfig),
        });
      }
    };
    fn();
  }, [isAuthenticated, loginWithRedirect, path]);

  const render = () => (isAuthenticated === true ? component : <LandingView />);

  return <Route exact path={path} render={render} />;
};

export default PrivateRoute;
