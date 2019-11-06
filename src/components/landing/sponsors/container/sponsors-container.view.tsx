import React from 'react';

import logos from '../../../../assets/images/sponsors/sponsors.svg';

const SponsorsContainer: React.FC = () => {
  return (
    <div className="sponsors__boxContainer">
      <span className="sponsors__title">Thank You Sponsors</span>
      <span className="sponsors__divider"></span>
      <span className="sponsors__logosContainer"></span>
      <img
        alt="Amazon, Microsoft, Poly"
        src={logos}
        className="sponsors__logos"
      ></img>
    </div>
  );
};

export default SponsorsContainer;
