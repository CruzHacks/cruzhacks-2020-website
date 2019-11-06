import React from 'react';

const template = [
  {
    title: 'INCLUSIVITY',
    text:
      'Team up with students\nfrom 25+ universities, and 50+\nmentors as\nyou power through the weekend.',
  },
  {
    title: 'INNOVATION',
    text:
      'Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community.',
  },
  {
    title: 'AGENCY',
    text:
      'Try out a new API, team up \nwith your fellow students, \nand build something \namazing at CruzHacks!',
  },
];

const welcomeCards = template.map((t, i) => {
  if (i === 0) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              d="M79.303 99.38H20.078C8.991 99.38 0 90.39 0 79.304V20.078C0 8.991 8.99 0 20.078 0h59.233C90.39 0 99.38 8.99 99.38 20.078v59.233c0 11.079-8.991 20.07-20.078 20.07z"
              fill="#76E2DA"
            />
            <path
              d="M49.123 59.007a9.294 9.294 0 100-18.587 9.294 9.294 0 000 18.587z"
              fill="url(#inclusivity_paint0_linear)"
            />
            <path
              d="M29.713 69.877a9.294 9.294 0 100-18.587 9.294 9.294 0 000 18.587z"
              fill="url(#inclusivity_paint1_linear)"
            />
            <path
              d="M69.31 46.585a9.294 9.294 0 100-18.588 9.294 9.294 0 000 18.588z"
              fill="url(#inclusivity_paint2_linear)"
            />
            <path
              d="M49.123 81.523a9.294 9.294 0 100-18.587 9.294 9.294 0 000 18.587z"
              fill="url(#inclusivity_paint3_linear)"
            />
            <path
              d="M49.123 35.715a9.294 9.294 0 100-18.587 9.294 9.294 0 000 18.587z"
              fill="url(#inclusivity_paint4_linear)"
            />
            <path
              d="M29.713 46.585a9.294 9.294 0 100-18.588 9.294 9.294 0 000 18.588z"
              fill="url(#inclusivity_paint5_linear)"
            />
            <path
              d="M69.31 69.877a9.294 9.294 0 100-18.587 9.294 9.294 0 000 18.587z"
              fill="url(#inclusivity_paint6_linear)"
            />
            <defs>
              <linearGradient
                id="inclusivity_paint0_linear"
                x1="42.556"
                y1="43.145"
                x2="55.697"
                y2="56.286"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint1_linear"
                x1="23.146"
                y1="54.015"
                x2="36.287"
                y2="67.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint2_linear"
                x1="62.743"
                y1="30.723"
                x2="75.884"
                y2="43.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint3_linear"
                x1="42.556"
                y1="65.661"
                x2="55.697"
                y2="78.802"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint4_linear"
                x1="42.556"
                y1="19.853"
                x2="55.697"
                y2="32.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint5_linear"
                x1="23.146"
                y1="30.723"
                x2="36.287"
                y2="43.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint6_linear"
                x1="62.743"
                y1="54.015"
                x2="75.884"
                y2="67.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  } else if (i === 1) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              d="M79.31 99.38H20.079C8.991 99.38 0 90.39 0 79.304V20.078C.008 8.991 8.999 0 20.086 0h59.232c11.08 0 20.07 8.99 20.07 20.078v59.233c0 11.079-8.99 20.07-20.078 20.07z"
              fill="#76E2DA"
            />
            <path
              d="M25.25 29.721c2.305-2.345 4.619-4.456 5.644-4.03 1.646.66 0 3.401-.986 5.016-.823 1.382-9.434 12.834-9.434 20.824 0 4.223 1.584 7.717 4.418 9.837 2.477 1.847 5.745 2.407 8.711 1.514 3.533-1.025 6.437-4.62 10.102-9.139 3.99-4.914 9.34-11.35 13.462-11.35 5.381 0 5.443 3.33 5.808 5.908-12.477 2.111-17.757 12.112-17.757 17.717 0 5.614 4.752 10.195 10.59 10.195 5.381 0 14.155-4.387 15.475-20.133h8.12v-8.245h-8.151c-.497-5.443-3.595-13.86-13.3-13.86-7.423 0-13.79 6.305-16.297 9.372-1.918 2.407-6.802 8.184-7.555 8.975-.823.994-2.244 2.772-3.664 2.772-1.483 0-2.376-2.74-1.188-6.335 1.156-3.595 4.62-9.434 6.102-11.615 2.578-3.766 4.286-6.336 4.286-10.824 0-7.158-5.412-9.433-8.284-9.433-4.356 0-8.153 3.3-8.976 4.123-1.188 1.188-2.174 2.181-2.903 3.066l5.776 5.645zm30.652 38.48c-1.025 0-2.446-.855-2.446-2.377 0-1.98 2.407-7.26 9.472-9.107-.986 8.874-4.72 11.483-7.026 11.483z"
              fill="url(#innovation_paint0_linear)"
            />
            <defs>
              <linearGradient
                id="innovation_paint0_linear"
                x1="19.473"
                y1="46.552"
                x2="79.396"
                y2="46.552"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  } else if (i === 2) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="100"
            viewBox="0 0 100 100"
          >
            <path
              d="M79.31 99.38H20.079C8.991 99.38 0 90.39 0 79.304V20.078C.008 8.991 8.999 0 20.086 0h59.232c11.08 0 20.07 8.99 20.07 20.078v59.233c0 11.079-8.99 20.07-20.078 20.07z"
              fill="#76E2DA"
            />
            <path
              d="M49.698 77.175c15.034 0 27.221-12.187 27.221-27.22 0-15.034-12.187-27.222-27.22-27.222-15.035 0-27.222 12.188-27.222 27.221 0 15.034 12.187 27.221 27.221 27.221z"
              fill="url(#agency_paint0_linear)"
            />
            <path
              d="M40.335 46.336a.994.994 0 000 1.382.994.994 0 001.382 0l7.01-7.01v23.136c0 .536.428.97.971.97a.968.968 0 00.978-.97V40.707l6.996 7.011a.994.994 0 001.382 0 .994.994 0 000-1.382l-8.672-8.672a.994.994 0 00-1.383 0l-8.664 8.672z"
              fill="#1E201D"
            />
            <defs>
              <linearGradient
                id="agency_paint0_linear"
                x1="30.45"
                y1="30.703"
                x2="68.946"
                y2="69.199"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff" />
                <stop offset="1" stopColor="#fff" stopOpacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  } else {
    throw new Error('Welcome card error! Incorrect mapping');
  }
});

const WelcomeCardRowView: React.FC = () => {
  return <div className="welcome__card-container">{welcomeCards}</div>;
};

export default WelcomeCardRowView;
