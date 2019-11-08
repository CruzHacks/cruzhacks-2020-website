import React from 'react';

import fbIcon from '../../../../../assets/images/social/facebook-icon.png';
import igIcon from '../../../../../assets/images/social/instagram-icon.png';
import ytIcon from '../../../../../assets/images/social/youtube-icon.png';

const FooterButtonView: React.FC = () => {
  return (
    <div className="footer-button-container">
      <div className="footer-up__button">
        <svg
          className="footer-up__image"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="25.4414"
            cy="24.5"
            rx="24.5212"
            ry="24.5"
            transform="rotate(-180 25.4414 24.5)"
            fill="#D2D2FF"
          />
          <path
            d="M26.6497 13.2928C26.2592 12.9023 25.626 12.9023 25.2355 13.2928L18.8716 19.6567C18.481 20.0473 18.481 20.6804 18.8716 21.071C19.2621 21.4615 19.8953 21.4615 20.2858 21.071L25.9426 15.4141L31.5995 21.071C31.99 21.4615 32.6232 21.4615 33.0137 21.071C33.4042 20.6804 33.4042 20.0473 33.0137 19.6567L26.6497 13.2928ZM26.9426 36.3635L26.9426 13.9999L24.9426 13.9999L24.9426 36.3635L26.9426 36.3635Z"
            fill="#333333"
          />
          <line
            x1="25.9426"
            y1="37"
            x2="25.9426"
            y2="28.6364"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="footer-social__buttons">
        <div className="footer-social__button">
          <a
            rel="noopener noreferrer"
            target="__blank"
            href="https://www.instagram.com/cruzhacks/"
          >
            <img src={igIcon} alt="instagram_icon" />
          </a>
        </div>
        <div className="footer-social__button">
          <a
            rel="noopener noreferrer"
            target="__blank"
            href="https://www.facebook.com/CruzHacks/"
          >
            <img src={fbIcon} alt="facebook_icon" />
          </a>
        </div>
        <div className="footer-social__button">
          <a
            rel="noopener noreferrer"
            target="__blank"
            href="https://www.youtube.com/channel/UCUD8rjCLCokNzK_rcd4JUmA"
          >
            <img src={ytIcon} alt="youtube_icon" />
          </a>
        </div>
      </div>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default FooterButtonView;
