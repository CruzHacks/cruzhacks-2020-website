import React from 'react';

interface sponsors {
  [index: string]: {
    logo: string;
    URL: string;
    tier: string;
    name: string;
  }[];
}

const SponsorsContainer: React.FC<sponsors> = sponsors => {
  return (
    <div className="sponsors__boxContainer">
      <span className="sponsors__title">Thank You Sponsors</span>
      <span className="sponsors__divider" />
      <div className="sponsors__logosContainer">
        <div className="sponsors__logos-tera">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'tera' && (
                <img src={sponsor.logo} alt="sponsor.name" />
              )
          )}
        </div>
        <div className="sponsors__logos-giga">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'giga' && (
                <img src={sponsor.logo} alt="sponsor.name" />
              )
          )}
        </div>
        <div className="sponsors__logos-kilo">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'kilo' && (
                <img src={sponsor.logo} alt="sponsor.name" />
              )
          )}
        </div>
        <div className="sponsors__logos-mega">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'mega' && (
                <img src={sponsor.logo} alt="sponsor.name" />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorsContainer;
