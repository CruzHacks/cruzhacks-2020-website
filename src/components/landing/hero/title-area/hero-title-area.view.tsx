import React from 'react';
import Countdown from 'react-countdown-now';
import HeroSubscribeToEmailList from './hero-subscribe-to-email-list.view';

const HeroTitleAreaView: React.FC = () => {
  const Completionist = () => <span> Decisions rolling out…</span>;
  return (
    <div className="hero-title-area">
      <div className="hero-title-area__title-text">
        cruzhacks 2020
        <div className="hero-title-area__slogan hero-title-area__slogan-text">
          you.belongHere();
        </div>
      </div>
      <div className="hero-title-area__eventInfo hero-title-area__eventInfo-text">
        <p>// January 17-19th, 2020</p>
        <p>// Stevenson Event Center, UC Santa Cruz</p>
        <p>
          //
          {
            <Countdown
              date={'Friday January 3 2020 23:59:59'}
              renderer={props =>
                props.completed ? (
                  <Completionist />
                ) : (
                  <>
                    <span>
                      {' '}
                      {props.days} days left to apply. Second pass limited!
                    </span>
                  </>
                )
              }
            />
          }
        </p>
      </div>
      <div className="hero-title-area__button-container">
        <a
          href="/portal"
          className="hero-title-area__sponsor-button"
          rel="noopener noreferrer"
        >
          <p className="hero-title-area__sponsor-button-text">APPLY</p>
        </a>

        <a
          href="mailto:sponsor@cruzhacks.com"
          className="hero-title-area__2019-button"
        >
          <p className="hero-title-area__2019-button-text">
            <br />
            SPONSOR
          </p>
        </a>
      </div>
      <HeroSubscribeToEmailList />
    </div>
  );
};

export default HeroTitleAreaView;
