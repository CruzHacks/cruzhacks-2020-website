import React from 'react';
import { Link } from 'react-router-dom';

const HeroLightBulbView: React.FC = () => {
  return (
    <div className="hero__lightbulb">
      <Link to="/">
        <svg
          className="lightbulb__svg"
          viewBox="0 0 55 48"
          fill="none"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path fill="url(#lightbulb_pattern0)" d="M0 0h55v48H0z" />
          <defs>
            <pattern
              id="lightbulb_pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#lightbulb_image0"
                transform="matrix(.00202 0 0 .00231 0 -.002)"
              />
            </pattern>
            <image
              id="lightbulb_image0"
              width="496"
              height="435"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </Link>
    </div>
  );
};
export default HeroLightBulbView;
