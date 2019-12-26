import React from 'react';

import logos from '../../../../assets/images/sponsors/sponsors.svg';

interface sponsors {
  [index: string]: {
    logo: HTMLObjectElement;
    URL: string;
    tier: string;
  }[];
}

const SponsorsContainer: React.FC<sponsors> = sponsors => {
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
