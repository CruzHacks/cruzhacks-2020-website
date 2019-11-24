import React from 'react';
import { Link } from 'react-router-dom';
// import packet from '../../../../../assets/data/sponsor/sponsorship_packet.pdf';

const HeroNavbarView: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__button">
        <Link to="/portal" style={{ textDecoration: `none` }}>
          <p className="navbar__button-text">APPLY</p>
        </Link>
      </div>
      <div className="navbar__button">
        <a
          href="mailto:sponsor@cruzhacks.com"
          style={{ textDecoration: 'none' }}
        >
          <p className="navbar__button-text" style={{ textDecoration: 'none' }}>
            SPONSOR
          </p>
        </a>
      </div>
      {/* <div className="navbar__button">
        <p className="navbar__button-text">JOIN US</p>
      </div> */}
      <div className="navbar__button">
        <Link to="/team" style={{ textDecoration: `none` }}>
          <p className="navbar__button-text">TEAM</p>
        </Link>
      </div>
    </div>
  );
};

export default HeroNavbarView;
