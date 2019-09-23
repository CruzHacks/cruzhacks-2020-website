import React from 'react';

const SponsorUsView: React.FC = () => {
  return (
    <div className="sponsor-us">
      <div className="sponsor-us__title">
        <h1 className="sponsor-us__title-text">SPONSOR US</h1>
      </div>
      <div className="sponsor-us__description">
        <p className="sponsor-us__description-text">
          Without the help of our sponsors Cruzhacks simply would
        </p>
        <p className="sponsor-us__description-text">
          not be possible. If you're interested in becoming a sponsor
        </p>
        <p className="sponsor-us__description-text">
          for Cruzhacks 2020 then please register your interest below.
        </p>
      </div>
      <div className="sponsor-us__button-container">
        <div className="sponsor-us__button">
          <p className="sponsor-us__button-text">LEARN MORE</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorUsView;
