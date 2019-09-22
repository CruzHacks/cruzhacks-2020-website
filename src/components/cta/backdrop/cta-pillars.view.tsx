import React from 'react';

const CtaPillarsView: React.FC = () => {
  return (
    <>
      <div className="pillar1-container">
        <svg
          className="pillar1-container__svg"
          viewBox="0 0 72 252"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M0 0l72 36v216L0 215V0z" fill="url(#cta-pillar1_linear)" />
          <defs>
            <linearGradient
              id="cta-pillar1_linear"
              x1="36"
              x2="36"
              y2="252"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C3F8F5" />
              <stop offset="1" stop-color="#E3FCF8" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="pillar2-container">
        <svg
          className="pillar2-container__svg"
          viewBox="0 0 72 252"
          preserveAspectRatio="xMinYMin meet"
        >
          <path d="M72 0L0 36v216l72-37V0z" fill="url(#cta-pillar2_linear)" />
          <defs>
            <linearGradient
              id="cta-pillar2_linear"
              x1="36"
              x2="36"
              y2="252"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#C3F8F5" />
              <stop offset="1" stop-color="#E3FCF8" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default CtaPillarsView;
