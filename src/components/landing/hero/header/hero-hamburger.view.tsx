import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from '../../../../assets/images/icons/hamburger.svg';
import { NONAME } from 'dns';

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
          <Link to="/portal" style={{ textDecoration: `none` }}>
            <li>
              <div className="hamburger__button">
                <p className="hamburger__button-text">APPLY</p>
              </div>
            </li>
          </Link>
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
            <a
              href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              style={{ textDecoration: 'none' }}
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p className="navbar__button-text">Mentor</p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              style={{ textDecoration: 'none' }}
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p className="navbar__button-text">Judge</p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              style={{ textDecoration: 'none' }}
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p className="navbar__button-text">Volunteer</p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              href="https://docs.google.com/document/d/1OKiuYrZsPzP1XEfKzNmgSWOuz28rLjNouAEbiUGnSss/edit?usp=sharing"
              style={{ textDecoration: 'none' }}
            >
              <li>
                <div className="navbar__dropButton">
                  <p className="navbar__button-text">Learn More</p>
                </div>
              </li>
            </a>
          ) : null}
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
