import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.svg';

const HeroHamburgerView: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayDrop, setDrop] = useState(false);

  const hideDropdownMenu = (event) => {
    if (
      event.target.className !== 'hamburger__button-text extended' &&
      event.target.className !== 'navbar__button-text' &&
      event.target.className !== 'hamburger__extended' &&
      event.target.className !== 'navbar__dropButton' &&
      event.target.className !== '' &&
      showDropdownMenu
    ) {
      document.removeEventListener('click', hideDropdownMenu);
      setDrop(false);
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
        <ul id="dropdown" className="hamburger__dropdown">
          <Link to="/team" style={{ textDecoration: `none` }}>
            <li>
              <div className="hamburger__button">
                <p className="hamburger__button-text">TEAM</p>
              </div>
            </li>
          </Link>
          <a
            href="https://2019.cruzhacks.com/"
            style={{ textDecoration: 'none' }}
          >
            <li>
              <div className="hamburger__button">
                <p
                  className="hamburger__button-text"
                  style={{ textDecoration: 'none' }}
                >
                  2019
                </p>
              </div>
            </li>
          </a>
        </ul>
      ) : null}
    </div>
  );
};

export default HeroHamburgerView;
