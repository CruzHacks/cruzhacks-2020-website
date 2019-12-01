import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.svg';

const HeroHamburgerView: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayDrop, setDrop] = useState(false);

  const hideDropdownMenu = event => {
    if (event.target.className != 'hamburger__button-text extended') {
      document.removeEventListener('click', hideDropdownMenu);
      console.log(event.target.className);
      setDisplayMenu(false);
    }
  };

  const showDropdownMenu = () => {
    setDisplayMenu(true);
  };

  const toggleExtended = () => {
    displayDrop ? setDrop(false) : setDrop(true);
  };

  useEffect(() => {
    if (displayMenu) {
      document.addEventListener('click', hideDropdownMenu);
    }
    return () => document.removeEventListener('click', hideDropdownMenu);
  });

  return (
    <div className="hamburger">
      <button onClick={showDropdownMenu} className="hamburger__icon">
        <img src={HamburgerIcon} alt="dropdown menu"></img>
      </button>
      {displayMenu ? (
        <ul id="dropdown">
          <li id="list">
            <div className="hamburger__button">
              <Link to="/portal" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">APPLY</p>
              </Link>
            </div>
          </li>
          <li id="list">
            <div onClick={toggleExtended} className="hamburger__button">
              <p
                className="hamburger__button-text extended"
                style={{ textDecoration: 'none' }}
              >
                HELP OUT
              </p>
            </div>
          </li>
          <li id="list">
            <div className="hamburger__button">
              <Link to="/team" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">TEAM</p>
              </Link>
            </div>
          </li>
          <li id="list">
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
