import React from 'react';
import './hero.sass';

const HeroLightBulbView: React.FC = () => {
  return (
    <svg
      className="hero__lightbulb"
      width="36"
      height="30"
      viewBox="0 0 36 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          opacity=".13"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.13 18.78H6.87C3.079 18.78 0 15.714 0 11.93s3.078-6.85 6.87-6.85h22.26c3.792 0 6.87 3.066 6.87 6.85s-3.078 6.85-6.87 6.85z"
          fill="#4A38F2"
        />
        <path
          d="M20.423 29.672h-5.997l6.84-2.606h-7.683l8.662-2.641"
          stroke="url(#paint0_linear)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.418 23.418c.364-2.116 2.217-4.35 3.055-5.273a8.461 8.461 0 0 0 1.054-1.406 10.781 10.781 0 0 0 1.488-5.716C28.91 5.286 24.256.556 18.505.337c-6.239-.236-11.37 4.735-11.37 10.9 0 1.967.522 3.816 1.435 5.41.32.556.715 1.064 1.146 1.537.856.946 2.665 3.149 3.02 5.233.07.403.408.701.817.701h9.052a.831.831 0 0 0 .813-.7z"
          stroke="url(#paint1_linear)"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <mask
          id="a"
          maskUnits="userSpaceOnUse"
          x="5"
          y="-2"
          width="26"
          height="28"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23.418 23.01c.364-2.054 2.217-4.226 3.055-5.12.395-.42.755-.871 1.054-1.362a10.25 10.25 0 0 0 1.488-5.553C28.91 5.4 24.256.801 18.505.587c-6.239-.228-11.37 4.598-11.37 10.59 0 1.91.522 3.705 1.435 5.25.32.54.715 1.034 1.146 1.494.856.92 2.665 3.057 3.02 5.085.07.39.408.679.817.679h9.052a.816.816 0 0 0 .813-.675z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="3.164"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </mask>
        <g mask="url(#a)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.672 23.654v-9.232a.666.666 0 0 0-.677-.657.666.666 0 0 0-.676.657v9.232c0 .363.303.657.677.657a.666.666 0 0 0 .676-.657z"
            fill="url(#paint2_linear)"
            stroke="url(#paint3_linear)"
            strokeWidth=".75"
            strokeMiterlimit="10"
          />
          <path
            d="M15.62 11.531c0-1.313 1.102-2.378 2.459-2.378s2.459 1.065 2.459 2.378c0 1.314-1.098 2.378-2.459 2.378-1.357 0-2.459-1.064-2.459-2.378z"
            stroke="url(#paint4_linear)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="13.256"
          y1="27.048"
          x2="22.575"
          y2="27.048"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5949F3" />
          <stop offset="1" stopColor="#4A38F2" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="6.803"
          y1="12.222"
          x2="29.351"
          y2="12.222"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5949F3" />
          <stop offset="1" stopColor="#4A38F2" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="17.321"
          y1="19.038"
          x2="18.671"
          y2="19.038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5949F3" />
          <stop offset="1" stopColor="#4A38F2" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="17.156"
          y1="19.038"
          x2="18.836"
          y2="19.038"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5949F3" />
          <stop offset="1" stopColor="#4A38F2" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="18.079"
          y1="34.294"
          x2="18.079"
          y2="-.414"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#5949F3" />
          <stop offset="1" stopColor="#4A38F2" />
        </linearGradient>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h36v30H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default HeroLightBulbView;
