import React from 'react';

interface sponsors {
  [index: string]: {
    logo: string;
    URL: string;
    tier: string;
    name: string;
    class: string;
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
                <div className="sponsors__logos-imgTera">
                  <a
                    key={sponsor.name}
                    href={sponsor.URL}
                    rel="noopener"
                    target="__blank"
                  >
                    <img
                      className={'sponsors__logos-' + sponsor.class}
                      src={sponsor.logo}
                      key={sponsor.name}
                      alt={sponsor.name}
                    />
                  </a>
                </div>
              )
          )}
        </div>
        <div className="sponsors__logos-giga">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'giga' && (
                <div className="sponsors__logos-imgGiga">
                  <a
                    key={sponsor.name}
                    href={sponsor.URL}
                    rel="noopener"
                    target="__blank"
                  >
                    <img
                      className={'sponsors__logos-' + sponsor.class}
                      src={sponsor.logo}
                      alt={sponsor.name}
                    />
                  </a>
                </div>
              )
          )}
        </div>
        <div className="sponsors__logos-kilo">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'kilo' && (
                <div className="sponsors__logos-imgKilo">
                  <a
                    key={sponsor.name}
                    href={sponsor.URL}
                    rel="noopener"
                    target="__blank"
                  >
                    <img
                      className={'sponsors__logos-' + sponsor.class}
                      src={sponsor.logo}
                      alt={sponsor.name}
                    />
                  </a>
                </div>
              )
          )}
        </div>
        <div className="sponsors__logos-mega">
          {sponsors.logos.map(
            sponsor =>
              sponsor.tier === 'mega' && (
                <div className="sponsors__logos-imgMega">
                  <a
                    key={sponsor.name}
                    href={sponsor.URL}
                    rel="noopener"
                    target="__blank"
                  >
                    <img
                      className={'sponsors__logos-' + sponsor.class}
                      src={sponsor.logo}
                      alt={sponsor.name}
                    />
                  </a>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default SponsorsContainer;
