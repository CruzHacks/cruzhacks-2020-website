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

  let logistics = 'Logistics';
  let sponsorship = 'Sponsorship';
  let marketing = 'Marketing';
  let design = 'Design';
  let eng = 'Engineering';

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
                      {logistics}
                    </p>
                  </div>
                </li>
              </a>
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
                      {sponsorship}
                    </p>
                  </div>
                </li>
              </a>
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
                      {marketing}
                    </p>
                  </div>
                </li>
              </a>
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
                      {design}
                    </p>
                  </div>
                </li>
              </a>
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
