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
                <a
                  key={sponsor.name}
                  href={sponsor.URL}
                  rel="noopener"
                  target="__blank"
                >
                  <img
                    className="sponsors__logos-img"
                    src={sponsor.logo}
                    key={sponsor.name}
                    alt={sponsor.name}
                  />
                </a>
              )
          )}
        </div>
        <div className="sponsors__logos-giga">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'giga' && (
                <a
                  key={sponsor.name}
                  href={sponsor.URL}
                  rel="noopener"
                  target="__blank"
                >
                  <img
                    className="sponsors__logos-img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                  />
                </a>
              )
          )}
        </div>
        <div className="sponsors__logos-kilo">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'kilo' && (
                <a
                  key={sponsor.name}
                  href={sponsor.URL}
                  rel="noopener"
                  target="__blank"
                >
                  <img
                    className="sponsors__logos-img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                  />
                </a>
              )
          )}
        </div>
        <div className="sponsors__logos-mega">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'mega' && (
                <a
                  key={sponsor.name}
                  href={sponsor.URL}
                  rel="noopener"
                  target="__blank"
                >
                  <img
                    className="sponsors__logos-img"
                    src={sponsor.logo}
                    alt={sponsor.name}
                  />
                </a>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorsContainer;
