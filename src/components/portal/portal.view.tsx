import React, { useState, useEffect } from 'react';
import ApplicationView from '../application/application.view';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';
import { getUserInfo } from '../../account';
import { useAuth0 } from '../../auth/auth';
import Auth0UserType from '../types/Auth0UserType';
import Countdown from 'react-countdown-now';

const PortalView: React.FC = () => {
  const authContext = useAuth0()!;
  const { user, logout } = authContext;
  const authUser: Auth0UserType = user;

  const [isAccepted, setIsAccepted] = useState(false);
  const [applicationStatusMessage, setMessage] = useState('');

  useEffect(() => {
    setMessage('Loading your profile status...');
    getUserInfo(authUser.email)
      .then(userObj => {
        const message =
          userObj[0].confirmeduser === true
            ? `Hi ${authUser.nickname}, congratulations! You have been accepted to CruzHacks 2020!`
            : `Hi ${authUser.nickname}, you have not been accepted to participate in CruzHacks2020.`
        setIsAccepted(userObj[0].confirmeduser);
        setMessage(message);
      })
      .catch(() => {
        const message =
          "We're having trouble contacting the CruzHacks Cloud. We'll be operational soon!";
        setIsAccepted(true);
        setMessage(message);
      });
  }, [authUser.email, authUser.email_verified, authUser.nickname]);

  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });

  const Completionist = () => (
    isAccepted 
    ?
      <span>
        <span style={{ paddingBottom: '1.75em' }}>
          Keep an eye on your email for a QR code that will be needed for entering the event.
        </span>
      </span>
    :
    <span>
      <span style={{paddingBottom: '1.75em'}}>
        Please apply again next year!
      </span>
    </span>
  );

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
                  <Completionist/>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Countdown
          date={'Friday January 3 2020 23:59:59'}
          renderer={props =>
            !props.completed ? (
              isAccepted === false &&
              authUser.email_verified === true ? (
                <div className="portal__application">
                  <ApplicationView user={authUser} />
                </div>
              ) : (
                <div className="portal__void"></div>
              )
            ) : (
              <div className="portal__void"></div>
            )
          }
        />

        {/* <div className="footer-view-container">
          <div className="footer-view-content__container">
            <FooterView />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default PortalView;
