import React from 'react';

const SponsorUsView: React.FC = () => {
  return (
    <div className="cta__sponsor-container">
      <div className="cta__sponsor-title-container">
        <h1 className="cta__sponsor-title">SPONSOR US</h1>
      </div>
      <div className="cta__sponsor-description-container">
        <p className="cta__sponsor-description">
          Without the help of our sponsors Cruzhacks simply would not be
          possible. If you're interested in bringing your brand to Cruzhacks
          2020— please register your interest below.
        </p>
      </div>
      <div className="cta__button-container">
        <a href="mailto:sponsor@cruzhacks.com" className="cta__button">
          <p className="cta__button-text">SPONSOR US</p>
        </a>
      </div>
    </div>
  );
};

export default SponsorUsView;
