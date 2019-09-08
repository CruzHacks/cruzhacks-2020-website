import React from 'react';

const HeroNavbarView: React.FC = () => {
  return (
    <div className="navbar__button-container">
      <div className="navbar__button">
        <p className="navbar__button__text">APPLY</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button__text">SPONSOR</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button__text">JOIN US</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button__text">TEAM</p>
      </div>
    </div>
  );
};

export default HeroNavbarView;
