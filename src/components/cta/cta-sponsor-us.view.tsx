import React from 'react';

const SponsorUsView: React.FC = () => {
  return (
    <div className="sponsor-us-container">
      <div className="sponsor-us-container__title">
        <h1 className="sponsor-us-container__main">SPONSOR US</h1>
      </div>
      <div className="sponsor-us-container__description">
        <p className="sponsor-us-container__body">
          Without the help of our sponsors Cruzhacks simply would
        </p>
        <p className="sponsor-us-container__body">
          not be possible. If you're interested in becoming a sponsor
        </p>
        <p className="sponsor-us-container__body">
          for Cruzhacks 2020 then please register your interest below.
        </p>
      </div>
      <div className="sponsor-us-container__button-container">
        <div className="sponsor-us-container__button">
          <p className="button__text">LEARN MORE</p>
        </div>
      </div>
    </div>
  );
};

export default SponsorUsView;
