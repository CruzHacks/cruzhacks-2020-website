import React, { useState, useEffect } from 'react';
import ApplicationView from '../application/application.view';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';
import { applicationHasBeenSubmitted } from '../../account';
import { useAuth0 } from '../../auth/auth';
import Auth0UserType from '../types/Auth0UserType';
import Countdown from 'react-countdown-now';

const PortalView: React.FC = () => {
  const authContext = useAuth0()!;
  const { user, logout } = authContext;
  const authUser: Auth0UserType = user;

  const [hasSubmittedApplication, setHasSubmitted] = useState(false);
  const [applicationStatusMessage, setMessage] = useState('');

  useEffect(() => {
    setMessage('Loading your profile status...');
    applicationHasBeenSubmitted(authUser.email)
      .then(hasSubmitted => {
        const message =
          hasSubmitted === true
            ? `Hi ${authUser.nickname}, your application is under review.`
            : authUser.email_verified === true
            ? `Hi ${authUser.nickname}, you haven't submitted your application yet. Apply below!`
            : `Hi ${authUser.nickname}, we need to verify your email first before you apply!`;
        setHasSubmitted(hasSubmitted);
        setMessage(message);
      })
      .catch(() => {
        const message =
          "We're having trouble contacting the CruzHacks Cloud. We'll be operational soon!";
        setHasSubmitted(true);
        setMessage(message);
      });
  }, [authUser.email, authUser.email_verified, authUser.nickname]);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  return (
    <>
      <div className="portal">
        <div className="portal__navbar">
          <HeroLightBulbView />
          <div className="portal__navbar-text-container">
            <span className="portal__navbar-title">Dashboard</span>
            <div className="portal__navbar-logout-container">
              <span
                className="portal__navbar-logout"
                onClick={() => logoutWithRedirect()}
              >
                Log out
              </span>
            </div>
          </div>
        </div>
        <div className="portal__appstatus-container">
          <div className="portal__appstatus">
            <span className="portal__appstatus-text">
              {applicationStatusMessage}
            </span>
          </div>
          <div className="portal__announcements">
            <div className="portal__announcements-container">
              <div className="portal__announcements-box">
                <span className="portal__announcements-styletext">
                  ANNOUNCEMENTS
                </span>
                <span className="portal__announcements-event-text">
                  <Countdown
                    date={'Wednesday December 18 2019 23:59:59'}
                    renderer={props => (
                      <span>
                        {props.days} {props.days === 1 ? 'day' : 'days'}
                      </span>
                    )}
                  />{' '}
                  to apply for a spot at CruzHacks!
                  <hr />
                  <div>Applications will be reviewed soon.</div>
                </span>
              </div>
            </div>
          </div>
        </div>

        {hasSubmittedApplication === false &&
        authUser.email_verified === true ? (
          <div className="portal__application">
            <ApplicationView user={authUser} />
          </div>
        ) : (
          <div className="portal__void"></div>
        )}
      </div>
    </>
  );
};

export default PortalView;
