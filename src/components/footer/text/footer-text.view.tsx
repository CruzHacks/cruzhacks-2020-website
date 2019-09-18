import React from 'react';


const FooterTextView : React.FC = () => {
    return (
        <div className="footer-text-container">
            <span className="footer-text__designers">Designed by Lily Lee and Ivy Chen.</span>
            <span className="footer-text__copyright">@ 2020 Cruzhacks</span>
            <div style={{clear: 'both'}}></div>
        </div>
    );
};

export default FooterTextView;