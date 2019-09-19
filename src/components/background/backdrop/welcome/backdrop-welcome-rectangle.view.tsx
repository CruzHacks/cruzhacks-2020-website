/*
    Note: This is for mobile the mobile view.
*/
import React from 'react';

const BackdropWelcomeRectangleView: React.FC = () => {
    return (
        <svg className="welcome-backdrop-rectangle__image" viewBox="0 0 375 1415" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-1 8.88097C-1 148.177 376.13 104.07 376 8.88097C375.87 -86.3079 380 1415 380 1415H-1C-1 1415 -1 -130.415 -1 8.88097Z" fill="#CEF9F7" />
            <path d="M-1 8.88097C-1 148.177 376.13 104.07 376 8.88097C375.87 -86.3079 380 1415 380 1415H-1C-1 1415 -1 -130.415 -1 8.88097Z" fill="url(#rectangle-paint0_linear)" />
            <defs>
                <linearGradient id="rectangle-paint0_linear" x1="189.001" y1="1415" x2="189" y2="-97.5104" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>

    );
};

export default BackdropWelcomeRectangleView;