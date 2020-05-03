import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HeroNavbarView: React.FC = () => {
  const [dropMenu, setDropMenu] = useState(false);

  const hideDropMenu = () => {
    setDropMenu(false);
  };

  const showDropMenu = () => {
    setDropMenu(true);
  };

  return (
    <div className="navbar">
      <div className="navbar__button">
        <Link to="/team" style={{ textDecoration: `none` }}>
          <p className="navbar__button-text">TEAM</p>
        </Link>
      </div>
      <div className="navbar__button">
        <a
          href="https://2019.cruzhacks.com/"
          style={{ textDecoration: 'none' }}
        >
          <p className="navbar__button-text" style={{ textDecoration: 'none' }}>
            2019
          </p>
        </a>
      </div>
    </div>
  );
};

export default HeroNavbarView;
