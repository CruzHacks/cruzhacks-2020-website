import React, { useState, useEffect } from 'react';
import ApplicationView from '../application/application.view';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';
import { getHackers } from '../../account';
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
    getHackers(authUser.email)
      .then(hackers => {
        const hasSubmitted = hackers.length > 0;

        const rejectedStatusMessage =
          'Thank you for your interest in CruzHacks. Unfortunately, due to limited space, we are unable to offer you a spot at our event this year. We appreciate your time and encourage you to apply again next year. ' +
          'If you would like to participate as a volunteer, please register here: https://bit.ly/2ZYu4AG';

        let message = '';

        if (hasSubmitted) {
          const firstName = hackers[0].firstname;
          const acceptedStatusMessage = `Congratulations ${firstName}!  We’re excited to offer you a spot at CruzHacks 2020. Please check your email for updates and further instructions.`;

          message = hackers[0].accepted
            ? acceptedStatusMessage
            : rejectedStatusMessage;
        } else {
          message = rejectedStatusMessage;
        }

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

  const Completionist = () => (
    <span>
      <span style={{ paddingBottom: '1.75em' }}>
        Keep an eye on your email.
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
                  <Countdown
                    date={'Friday January 3 2020 23:59:59'}
                    renderer={props =>
                      props.completed ? (
                        <Completionist />
                      ) : props.days >= 1 ? (
                        <span style={{ bottom: '0.5vh', position: 'relative' }}>
                          {props.days} {props.days === 1 ? 'day' : 'days'} to
                          apply for a spot at CruzHacks.
                        </span>
                      ) : (
                        <span>
                          {props.hours} {props.hours === 1 ? 'hour' : 'hours'}{' '}
                          to apply for a spot at CruzHacks.
                        </span>
                      )
                    }
                  />
                  <hr />
                  <div>Decisions announced!</div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <Countdown
          date={'Friday January 3 2020 23:59:59'}
          renderer={props =>
            !props.completed ? (
              hasSubmittedApplication === false &&
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
