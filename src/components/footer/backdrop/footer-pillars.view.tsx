import React from 'react';

const FooterPillarsView: React.FC = () => {
    return (
        <svg className="footer-pillars-image" width="197" height="284" viewBox="0 0 197 284" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.8342 0L0.771729 36V252L72.8342 215V0Z" fill="url(#footer-pillar0_linear)" />
            <path d="M196.942 32L124.879 68V284L196.942 247V32Z" fill="url(#footer-pillar1_linear)" />
            <defs>
                <linearGradient id="footer-pillar0_linear" x1="163.32" y1="289.082" x2="159.499" y2="80.8522" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="0.307292" stopColor="white" />
                    <stop offset="1" stopColor="#F2F2FF" />
                </linearGradient>
                <linearGradient id="footer-pillar1_linear" x1="163.32" y1="289.082" x2="159.499" y2="80.8522" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="0.307292" stopColor="white" />
                    <stop offset="1" stopColor="#F2F2FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default FooterPillarsView