import React from 'react';

const FooterTextView: React.FC = () => {
  return (
    <div className="footer-text-container">
      <span className="footer-text__designers">
        Made with love by the CruzHacks Team.
      </span>
      <span className="footer-text__copyright">
      @ 2020 Cruzhacks. All rights reserved.
      </span>
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default FooterTextView;
