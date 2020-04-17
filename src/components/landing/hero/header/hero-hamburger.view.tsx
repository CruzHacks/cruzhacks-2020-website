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

  let logistics = 'Logistics';
  let sponsorship = 'Sponsorship';
  let marketing = 'Marketing';
  let design = 'Design';
  let eng = 'Engineering';

  return (
    <div className="hamburger">
      <button onClick={showDropdownMenu} className="hamburger__icon">
        <img src={HamburgerIcon} alt="dropdown menu"></img>
      </button>
      {displayMenu ? (
        <ul id="dropdown" className="hamburger__dropdown">
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
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY"
              target="__blank"
              rel="noopener noreferrer"
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p
                    className="navbar__button-text"
                    style={{ fontWeight: 500 }}
                  >
                    {logistics}
                  </p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY"
              target="__blank"
              rel="noopener noreferrer"
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p
                    className="navbar__button-text"
                    style={{ fontWeight: 500 }}
                  >
                    {sponsorship}
                  </p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY"
              target="__blank"
              rel="noopener noreferrer"
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p
                    className="navbar__button-text"
                    style={{ fontWeight: 500 }}
                  >
                    {marketing}
                  </p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY"
              target="__blank"
              rel="noopener noreferrer"
            >
              <li style={{ border: 'none' }}>
                <div className="navbar__dropButton">
                  <p
                    className="navbar__button-text"
                    style={{ fontWeight: 500 }}
                  >
                    {design}
                  </p>
                </div>
              </li>
            </a>
          ) : null}
          {displayDrop ? (
            <a
              style={{ textDecoration: 'none' }}
              href="https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY"
              target="__blank"
              rel="noopener noreferrer"
            >
              <li>
                <div className="navbar__dropButton">
                  <p
                    className="navbar__button-text"
                    style={{ fontWeight: 500 }}
                  >
                    {eng}
                  </p>
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
