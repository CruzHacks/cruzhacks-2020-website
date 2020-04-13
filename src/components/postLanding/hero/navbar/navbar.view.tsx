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

  let [logistics, setLogistics] = useState('Logistics');
  let [marketing, setMarketing] = useState('Marketing');
  let [design, setDesign] = useState('Design');
  let [eng, setEng] = useState('Engineering');

  return (
    <div className="navbar">
      <div
        onMouseEnter={showDropMenu}
        onMouseLeave={hideDropMenu}
        className="navbar__button"
      >
        <p
          className="navbar__button-text"
          style={{ textDecoration: 'none', cursor: 'context-menu' }}
        >
          GET INVOLVED
        </p>
        {dropMenu ? (
          <div className="navbar__dropdown">
            <ul>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setLogistics('Recruitment starting soon!');
                  setTimeout((e) => setLogistics('Logistics'), 3000);
                }}
                style={{ textDecoration: 'none' }}
                href="/#"
              >
                <li>
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
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setMarketing('Recruitment starting soon!');
                  setTimeout((e) => setMarketing('Marketing'), 3000);
                }}
                style={{ textDecoration: 'none' }}
                href="/#"
              >
                <li>
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
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setDesign('Recruitment starting soon!');
                  setTimeout((e) => setDesign('Design'), 3000);
                }}
                style={{ textDecoration: 'none' }}
                href="/#"
              >
                <li>
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
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setEng('Recruitment starting soon!');
                  setTimeout((e) => setEng('Engineering'), 3000);
                }}
                style={{ textDecoration: 'none' }}
                href="/#"
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
            </ul>
          </div>
        ) : null}
      </div>
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
