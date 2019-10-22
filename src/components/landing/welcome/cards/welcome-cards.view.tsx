import React from 'react';

const template = [
  {
    title: 'INCLUSIVITY',
    text:
      'Team up with students \nfrom 25+ universities, and \n50+ superhero mentors as \nyou power through the weekend.',
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
  if (i == 0) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="125"
            viewBox="0 0 100 125"
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
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint1_linear"
                x1="23.146"
                y1="54.015"
                x2="36.287"
                y2="67.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint2_linear"
                x1="62.743"
                y1="30.723"
                x2="75.884"
                y2="43.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint3_linear"
                x1="42.556"
                y1="65.661"
                x2="55.697"
                y2="78.802"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint4_linear"
                x1="42.556"
                y1="19.853"
                x2="55.697"
                y2="32.993"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint5_linear"
                x1="23.146"
                y1="30.723"
                x2="36.287"
                y2="43.863"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
              <linearGradient
                id="inclusivity_paint6_linear"
                x1="62.743"
                y1="54.015"
                x2="75.884"
                y2="67.156"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  } else if (i == 1) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="125"
            viewBox="0 0 100 125"
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
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  } else if (i == 2) {
    return (
      <div key={i} className="welcome__card">
        <div className="welcome__card-text">
          <span className="welcome__card-header">{t.title}</span>
          <svg
            className="welcome__card-tree"
            fill="none"
            width="100"
            height="125"
            viewBox="0 0 100 125"
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
                <stop stop-color="#fff" />
                <stop offset="1" stop-color="#fff" stop-opacity=".4" />
              </linearGradient>
            </defs>
          </svg>
          <p className="welcome__card-caption">{t.text}</p>
        </div>
      </div>
    );
  }
});

const WelcomeCardRowView: React.FC = () => {
  return <div className="welcome__card-container">{welcomeCards}</div>;
};

export default WelcomeCardRowView;

{
  /* <svg
  className="welcome__card-tree"
  width="81"
  height="125"
  viewBox="0 0 81 125"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clipPath="url(#tree_clip0)">
    <path
      d="M77.1901 98.2593L45.9825 82.491C42.3177 80.6381 37.9831 80.6444 34.3184 82.5036L3.10441 98.3728C-0.838403 100.377 -0.832085 105.999 3.11705 107.996L33.756 123.481C37.7746 125.511 42.5199 125.517 46.5385 123.5L77.1775 108.116C81.234 106.074 81.2404 100.301 77.1901 98.2593Z"
      fill="url(#tree0_linear)"
    />
    <path
      d="M5.08847 72.7413V86.5748C5.08847 90.205 7.1357 93.5326 10.3835 95.1712L31.7972 105.992C35.8664 108.047 40.6686 108.053 44.7441 106.017L70.1954 93.2742C73.3168 91.7112 75.2882 88.5286 75.2882 85.0434V72.7476L38.4318 91.0054L5.08847 72.7413Z"
      fill="#DAF7F7"
    />
    <path
      d="M40.1884 91.6923L40.4853 107.076C40.8329 107.026 41.2752 106.944 41.787 106.818C41.787 106.818 43.0696 106.496 44.3207 105.923C45.6855 105.299 56.4272 99.9168 71.1306 92.436C71.3644 92.2847 71.6045 92.1145 71.8383 91.9255C73.8666 90.2869 74.7322 88.0369 75.124 86.4803C75.1619 86.2723 75.2124 85.9761 75.2503 85.6232C75.3135 84.9614 75.2946 84.4635 75.2946 84.3375C75.2693 83.5371 75.2503 78.6402 75.2377 71.8274L40.1884 91.6923Z"
      fill="#F8F8FE"
    />
    <path
      d="M72.6281 68.5376L45.2685 54.7103C42.0523 53.0843 38.2548 53.0906 35.045 54.7229L7.6854 68.6384C4.22912 70.3968 4.23544 75.3252 7.69804 77.0709L34.5585 90.6461C38.0779 92.4233 42.2419 92.4296 45.7677 90.6587L72.6281 77.1717C76.1728 75.3882 76.1792 70.3274 72.6281 68.5376Z"
      fill="url(#tree1_linear)"
    />
    <path
      d="M45.8435 57.6787C49.6298 57.6787 52.6992 55.887 52.6992 53.6768C52.6992 51.4665 49.6298 49.6748 45.8435 49.6748C42.0572 49.6748 38.9878 51.4665 38.9878 53.6768C38.9878 55.887 42.0572 57.6787 45.8435 57.6787Z"
      fill="#A8EDED"
    />
    <path
      d="M33.3895 54.8238V73.4471C33.3895 75.6592 36.4604 77.4491 40.2452 77.4491C44.0301 77.4491 47.1009 75.6592 47.1009 73.4471V54.8238C47.1009 57.0359 44.0364 58.8258 40.2452 58.8258C36.4604 58.8321 33.3895 57.0359 33.3895 54.8238Z"
      fill="white"
    />
    <path
      d="M38.9941 53.6768C38.9941 55.8889 42.065 57.6787 45.8498 57.6787C49.6347 57.6787 52.7055 55.8889 52.7055 53.6768H38.9941Z"
      fill="#A8EDED"
    />
    <path
      d="M39.9672 22.6001L18.9641 54.1936C18.0353 55.5927 18.5345 57.4834 20.032 58.246L20.2847 58.3783C33.0294 64.8382 48.1119 64.7878 60.8123 58.246C62.2909 57.4834 62.79 55.6116 61.8801 54.2188L41.1993 22.6001C40.9087 22.1589 40.2642 22.1589 39.9672 22.6001Z"
      fill="#71E2E2"
    />
    <path
      d="M40.3084 10.3169L21.7885 38.1668C20.9671 39.4021 21.4094 41.0722 22.73 41.7402L22.9575 41.8537C34.192 47.5446 47.4863 47.5005 58.6829 41.7402C59.9909 41.0659 60.4269 39.4147 59.6244 38.192L41.3889 10.3232C41.1361 9.93246 40.5675 9.92616 40.3084 10.3169Z"
      fill="#71E2E2"
    />
    <path
      d="M40.4474 0.213924L26.9003 20.5767C26.3 21.4779 26.6223 22.7006 27.589 23.1921L27.7533 23.2741C35.9675 27.4399 45.6919 27.4084 53.8808 23.1921C54.8349 22.7006 55.1571 21.4905 54.5695 20.5956L41.2372 0.213924C41.054 -0.0696803 40.6307 -0.0696803 40.4474 0.213924Z"
      fill="#71E2E2"
    />
  </g>
  <defs>
    <linearGradient
      id="tree0_linear"
      x1="0.153619"
      y1="103.052"
      x2="80.223"
      y2="103.052"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#96EAEA" />
      <stop offset="1" stopColor="#89E7E7" />
    </linearGradient>
    <linearGradient
      id="tree1_linear"
      x1="5.09054"
      y1="72.7393"
      x2="75.2861"
      y2="72.7393"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#DEF8F8" />
      <stop offset="1" stopColor="#96EAEA" />
    </linearGradient>
    <clipPath id="tree_clip0">
      <rect
        width="80.0694"
        height="125"
        fill="white"
        transform="translate(0.153625)"
      />
    </clipPath>
  </defs>
</svg>; */
}
