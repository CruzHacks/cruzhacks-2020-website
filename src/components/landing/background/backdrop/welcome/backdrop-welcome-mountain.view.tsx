import React from 'react';

const BackdropWelcomeMountainView: React.FC = () => {
  return (
    <>
      <svg
        className="welcome-backdrop__mountain-image"
        viewBox="0 0 1150 547"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M-8.00696 156.706L279.59 10.9566C308.403 -3.64674 342.456 -3.65219 371.269 10.9402L578.471 115.862C616.999 135.371 662.522 135.398 701.071 115.927L805.205 63.341C824.687 53.5019 847.705 53.5673 867.132 63.5209L1049.04 156.706L1150 206.311V544.275L-8.00696 547V156.706Z"
          fill="url(#mountain-linear)"
        />
        <defs>
          <linearGradient
            id="mountain-linear"
            x1="572.518"
            y1="84.8919"
            x2="565.901"
            y2="1241.58"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B7F7F3" />
            <stop offset="0.348958" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        className="welcome-backdrop__mountain-mobile-image"
        viewBox="0 0 375 1415"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-1 8.88097C-1 148.177 376.13 104.07 376 8.88097C375.87 -86.3079 380 1415 380 1415H-1C-1 1415 -1 -130.415 -1 8.88097Z"
          fill="#CEF9F7"
        />
        <path
          d="M-1 8.88097C-1 148.177 376.13 104.07 376 8.88097C375.87 -86.3079 380 1415 380 1415H-1C-1 1415 -1 -130.415 -1 8.88097Z"
          fill="url(#welcome-backdrop-mountain-mobile-paint0_linear)"
        />
        <defs>
          <linearGradient
            id="welcome-backdrop-mountain-mobile-paint0_linear"
            x1="189.001"
            y1="1415"
            x2="189"
            y2="-97.5104"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default BackdropWelcomeMountainView;
