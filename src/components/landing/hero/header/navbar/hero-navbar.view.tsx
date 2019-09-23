import React from 'react';

const HeroNavbarView: React.FC = () => {
  return (
    <div className="navbar">
      <div className="navbar__button">
        <p className="navbar__button-text">APPLY</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button-text">SPONSOR</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button-text">JOIN US</p>
      </div>
      <div className="navbar__button">
        <p className="navbar__button-text">TEAM</p>
      </div>
    </div>
  );
};

export default HeroNavbarView;
