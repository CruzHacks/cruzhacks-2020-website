import React from 'react';

const HackerPacketCardView: React.FC = () => {
  return (
    <div className="hacker-packet__container">
      <div className="hacker-packet__card">
        <span className="hacker-packet__slug-on">
          Ready to get your slug on?
        </span>
        <span className="hacker-packet__title">Hacker Pack</span>
        <span className="hacker-packet__info">
          Here's some tutorials and code examples to help you start a project
          with this Github repository.
        </span>
        <div className="hacker-packet__link-container">
          <a
            className="hacker-packet__packet"
            href="https://github.com/CruzHacks/Cruzhacks-Hacker-Packs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacker Pack
          </a>
        </div>
      </div>
    </div>
  );
};

export default HackerPacketCardView;
