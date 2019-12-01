import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.svg';

const HeroHamburgerView: React.FC = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [displayDrop, setDrop] = useState(false);

  const hideDropdownMenu = event => {
    if (
      event.target.className !== 'hamburger__extended' &&
      event.target.className !== 'hamburger__button-text extended'
    ) {
      document.removeEventListener('click', hideDropdownMenu);
      console.log(event.target.className);
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
        <ul id="dropdown">
          <li>
            <div className="hamburger__button">
              <Link to="/portal" style={{ textDecoration: `none` }}>
                <p className="hamburger__button-text">APPLY</p>
              </Link>
            </div>
          </li>
          <li onClick={toggleExtended} className="hamburger__extended">
            <div className="hamburger__button">
              <p
                className="hamburger__button-text extended"
                style={{ textDecoration: 'none' }}
              >
                GET INVOLVED
              </p>
            </div>
          </li>
          {displayDrop ? (
            <li>
              <div className="navbar__dropButton">
                <a href="https://forms.gle/rP8MGCwRk9CTdKJ67">
                  <p className="navbar__button-text">Sign Up</p>
                </a>
              </div>
            </li>
          ) : null}
          {displayDrop ? (
            <li>
              <div className="navbar__dropButton">
                <a href="https://docs.google.com/document/d/1OKiuYrZsPzP1XEfKzNmgSWOuz28rLjNouAEbiUGnSss/edit?usp=sharing">
                  <p className="navbar__button-text">Learn More</p>
                </a>
              </div>
            </li>
          ) : null}
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
