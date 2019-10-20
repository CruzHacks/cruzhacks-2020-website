import React from 'react';

const template = [
  {
    title: 'INCLUSIVITY',
    text:
      'Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community.',
  },
  {
    title: 'INNOVATION',
    text:
      'Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community.',
  },
  {
    title: 'AGENCY',
    text:
      'Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community.',
  },
];

const welcomeCards = template.map((t, i) => {
  return (
    <div key={i} className="welcome__card">
      <div className="welcome__card-text">
        <span className="welcome__card-header">{t.title}</span>
        <svg
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
        </svg>

        <p className="welcome__card-caption">{t.text}</p>
      </div>
    </div>
  );
});

const WelcomeCardRowView: React.FC = () => {
  return <div className="welcome__card-container">{welcomeCards}</div>;
};

export default WelcomeCardRowView;
