import React, { useState, useEffect } from 'react';
import ApplicationView from '../application/application.view';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';
import { applicationHasBeenSubmitted } from '../../account';
import { useAuth0 } from '../../auth/auth';

const PortalView: React.FC = () => {
  const authContext = useAuth0()!;

  const { user, logout } = authContext;

  const [hasSubmittedApplication, setHasSubmitted] = useState(false);
  const [applicationStatusMessage, setMessage] = useState('');

  useEffect(() => {
    applicationHasBeenSubmitted(user.email)
      .then(hasSubmitted => {
        const message =
          hasSubmitted === true
            ? `Hi ${user.nickname}, your application is under review.`
            : user.email_verified === true
            ? `Hi ${user.nickname}, you haven't submitted your application yet. Apply below!`
            : `Hi ${user.nickname}, we need to verify your email first before you apply!`;
        setHasSubmitted(hasSubmitted);
        setMessage(message);
      })
      .catch(() => {
        const message =
          "We're having trouble contacting the CruzHacks Cloud. We'll be operational soon!";
        setHasSubmitted(true);
        setMessage(message);
      });
  }, [user.email, user.email_verified, user.nickname]);

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
        <div className="portal__appstatus">
          <span className="portal__appstatus-text">
            {/* Your application is under review. Days until CruzHacks: */}
            {applicationStatusMessage}
          </span>
        </div>
        {/* <div className="portal__announcements">
            <div className="portal__announcements-container">
              <span className="portal__announcements-styletext">
                ANNOUNCEMENTS
              </span>
              <div className="portal__announcements-box"></div>
            </div>
          </div> */}
        {hasSubmittedApplication === false && user.email_verified === true ? (
          <div className="portal__application">
            <ApplicationView />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default PortalView;
