import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.svg';

const HeroHamburgerView: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  const hideDropdownMenu = () => {
    setDisplayMenu(false);
    document.removeEventListener('click', hideDropdownMenu);
  };

  const showDropdownMenu = () => {
    if (displayMenu) {
      hideDropdownMenu();
      return;
    }
    setDisplayMenu(true);
    document.addEventListener('click', hideDropdownMenu);
  };

  return (
    <div className="hamburger">
      <button onClick={showDropdownMenu} className="hamburger__icon">
        <img src={HamburgerIcon} alt="dropdown menu"></img>
      </button>
      {displayMenu ? (
        <ul>
          <li>
            <div className="hamburger__button">
              <Link to="/" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">HOME </p>
              </Link>
            </div>
          </li>
          <li>
            <div className="hamburger__button">
              <Link to="/portal" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">APPLY</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="hamburger__button">
              <a
                href="mailto:sponsor@cruzhacks.com"
                style={{ textDecoration: 'none' }}
              >
                <p
                  className="hamburger__button-text"
                  style={{ textDecoration: 'none' }}
                >
                  SPONSOR
                </p>
              </a>
            </div>
          </li>
          <li>
            <div className="hamburger__button">
              <Link to="/team" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">TEAM</p>
              </Link>
            </div>
          </li>
          <li>
            <div className="hamburger__button">
              <a
                href="https://2019.cruzhacks.com/"
                style={{ textDecoration: 'none' }}
              >
                <p
                  className="hamburger__button-text"
                  style={{ textDecoration: 'none' }}
                >
                  2019
                </p>
              </a>
            </div>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default HeroHamburgerView;
