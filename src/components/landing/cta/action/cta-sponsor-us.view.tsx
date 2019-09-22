import React from 'react';

const SponsorUsView: React.FC = () => {
  return (
    <div className="sponsor-us__container">
      <div className="sponsor-us__title-container">
        <h1 className="sponsor-us__title">SPONSOR US</h1>
      </div>
      <div className="sponsor-us__description-container">
        <p className="sponsor-us__description">
          Without the help of our sponsors Cruzhacks simply would
        </p>
        <p className="sponsor-us-description">
          not be possible. If you're interested in bringing your brand
        </p>
        <p className="sponsor-us-description">
          to Cruzhacks 2020— please register your interest below.
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
