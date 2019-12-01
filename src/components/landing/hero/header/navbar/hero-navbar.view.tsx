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
      <Link to="/portal" style={{ textDecoration: `none` }}>
        <div className="navbar__button">
          <p className="navbar__button-text">APPLY</p>
        </div>
      </Link>
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
                style={{ textDecoration: 'none' }}
                href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              >
                <li>
                  <div className="navbar__dropButton">
                    <p
                      className="navbar__button-text"
                      style={{ fontWeight: 500 }}
                    >
                      Mentor
                    </p>
                  </div>
                </li>
              </a>
              <a
                style={{ textDecoration: 'none' }}
                href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              >
                <li>
                  <div className="navbar__dropButton">
                    <p
                      className="navbar__button-text"
                      style={{ fontWeight: 500 }}
                    >
                      Judge
                    </p>
                  </div>
                </li>
              </a>
              <a
                style={{ textDecoration: 'none' }}
                href="https://forms.gle/rP8MGCwRk9CTdKJ67"
              >
                <li>
                  <div className="navbar__dropButton">
                    <p
                      className="navbar__button-text"
                      style={{ fontWeight: 500 }}
                    >
                      Volunteer
                    </p>
                  </div>
                </li>
              </a>
              <a
                style={{ textDecoration: 'none' }}
                href="https://docs.google.com/document/d/1OKiuYrZsPzP1XEfKzNmgSWOuz28rLjNouAEbiUGnSss/edit?usp=sharing"
              >
                <li>
                  <div className="navbar__dropButton">
                    <p
                      className="navbar__button-text"
                      style={{ fontWeight: 500 }}
                    >
                      Learn More
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
