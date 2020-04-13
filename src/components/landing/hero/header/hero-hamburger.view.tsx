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

  let [logistics, setLogistics] = useState('Logistics');
  let [marketing, setMarketing] = useState('Marketing');
  let [design, setDesign] = useState('Design');
  let [eng, setEng] = useState('Engineering');

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
              onClick={(e) => {
                e.preventDefault();
                setLogistics('Recruitment starting soon!');
                setTimeout((e) => setLogistics('Logistics'), 3000);
              }}
              href="/#"
              style={{ textDecoration: 'none' }}
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
              onClick={(e) => {
                e.preventDefault();
                setMarketing('Recruitment starting soon!');
                setTimeout((e) => setMarketing('Marketing'), 3000);
              }}
              href="/#"
              style={{ textDecoration: 'none' }}
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
              onClick={(e) => {
                e.preventDefault();
                setDesign('Recruitment starting soon!');
                setTimeout((e) => setDesign('Design'), 3000);
              }}
              href="/#"
              style={{ textDecoration: 'none' }}
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
              onClick={(e) => {
                e.preventDefault();
                setEng('Recruitment starting soon!');
                setTimeout((e) => setEng('Engineering'), 3000);
              }}
              href="/#"
              style={{ textDecoration: 'none' }}
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
