import React from 'react';

const BackdropAboutPillars: React.FC = () => {
    return (
        <svg className="about-backdrop-pillars__image" width="616" height="470" viewBox="0 0 616 470" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M107.495 123L143.526 142V470L107.495 449V123Z" fill="url(#about-pillars_paint0_linear)" />
            <g clip-path="url(#about-pillars_clip0)">
                <path d="M0.401886 0L72.4644 36V252L0.401886 215V0Z" fill="url(#about-pillars_paint1_linear)" />
            </g>
            <g clip-path="url(#about-pillars_clip1)">
                <path d="M396.746 65L468.808 101V317L396.746 280V65Z" fill="url(#about-pillars_paint2_linear)" />
            </g>
            <g clip-path="url(#about-pillars_clip2)">
                <path d="M615.936 116L543.873 152V368L615.936 331V116Z" fill="url(#about-pillars_paint3_linear)" />
            </g>
            <defs>
                <linearGradient id="about-pillars_paint0_linear" x1="125.51" y1="123" x2="125.51" y2="470" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E5E5FF" />
                    <stop offset="0.0001" stop-color="#F7F7FE" />
                    <stop offset="1" stop-color="white" />
                </linearGradient>
                <linearGradient id="about-pillars_paint1_linear" x1="34.0241" y1="257.082" x2="37.8443" y2="48.8522" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.307292" stop-color="white" />
                    <stop offset="1" stop-color="#F1F1FF" />
                </linearGradient>
                <linearGradient id="about-pillars_paint2_linear" x1="430.368" y1="322.082" x2="434.188" y2="113.852" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.307292" stop-color="white" />
                    <stop offset="1" stop-color="#F7F7FF" />
                </linearGradient>
                <linearGradient id="about-pillars_paint3_linear" x1="582.314" y1="373.082" x2="578.493" y2="164.852" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.307292" stop-color="white" />
                    <stop offset="1" stop-color="#F7F7FF" />
                </linearGradient>
                <clipPath id="about-pillars_clip0">
                    <rect width="72.0625" height="252" fill="white" transform="translate(0.401886)" />
                </clipPath>
                <clipPath id="about-pillars_clip1">
                    <rect width="72.0625" height="252" fill="white" transform="translate(396.746 65)" />
                </clipPath>
                <clipPath id="about-pillars_clip2">
                    <rect width="72.0625" height="252" fill="white" transform="matrix(-1 0 0 1 615.936 116)" />
                </clipPath>
            </defs>
        </svg>

    );
};

export default BackdropAboutPillars;