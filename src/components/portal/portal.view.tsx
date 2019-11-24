import React, { useState, useEffect } from 'react';
import ApplicationView from '../application/application.view';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';
import { applicationHasBeenSubmitted } from '../../account';
import { useAuth0 } from '../../auth/auth';

const PortalView: React.FC = () => {
  const authContext = useAuth0()!;
  const { user, logout } = authContext;

  const userName = user.name.split('@')[0];

  const [hasSubmittedApplication, setHasSubmitted] = useState(false);
  const [applicationStatusMessage, setMessage] = useState('');

  useEffect(() => {
    applicationHasBeenSubmitted(user.email)
      .then(hasSubmitted => {
        const message =
          hasSubmitted === true
            ? `Hi ${userName}, Your application is under review.`
            : `Hi ${userName}, You haven't yet submitted your application. Apply below!`;
        setHasSubmitted(hasSubmitted);
        setMessage(message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

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
            <span
              className="portal__navbar-logout"
              onClick={() => logoutWithRedirect()}
            >
              Log out
            </span>
          </div>
        </div>
        <div className="portal__appstatus">
          <div className="portal__appstatus-container">
            <span className="portal__appstatus-text">
              {/* Your application is under review. Days until CruzHacks: */}
              {applicationStatusMessage}
            </span>
            {/* <div className="portal__appstatus-status-container"></div> */}
          </div>
        </div>
        {/* <div className="portal__announcements">
            <div className="portal__announcements-container">
              <span className="portal__announcements-styletext">
                ANNOUNCEMENTS
              </span>
              <div className="portal__announcements-box"></div>
            </div>
          </div> */}
        {hasSubmittedApplication === false ? (
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
