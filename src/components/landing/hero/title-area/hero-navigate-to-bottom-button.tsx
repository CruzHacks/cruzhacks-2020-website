import React from 'react';

const HeroNavigateToBottomButtonView: React.FC = () => {
  return (
    <div className="navigate-to-bottom-container">
      <svg
        className="navigate-to-bottom-outer-circle"
        width="66"
        height="66"
        viewBox="0 0 66 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="33" cy="33" r="33" fill="#F9F9FF" />
      </svg>
      <svg
        className="navigate-to-bottom-middle-circle"
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="22" cy="22" r="22" fill="#F1F1FF" />
      </svg>
      <svg
        className="navigate-to-bottom-inner-circle"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="#E5E5FD" />
      </svg>
      <svg
        className="navigate-to-bottom-arrow"
        width="16"
        height="45"
        viewBox="0 0 16 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.29289 44.7071C7.68342 45.0976 8.31658 45.0976 8.7071 44.7071L15.0711 38.3431C15.4616 37.9526 15.4616 37.3195 15.0711 36.9289C14.6805 36.5384 14.0474 36.5384 13.6569 36.9289L8 42.5858L2.34314 36.9289C1.95262 36.5384 1.31946 36.5384 0.928931 36.9289C0.538406 37.3195 0.538406 37.9526 0.928931 38.3431L7.29289 44.7071ZM7 3L7 44L9 44L9 3L7 3Z"
          fill="#333333"
        />
        <line
          x1="8"
          y1="1"
          x2="8"
          y2="18"
          stroke="#333333"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default HeroNavigateToBottomButtonView;
