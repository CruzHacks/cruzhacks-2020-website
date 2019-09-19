import React from 'react';

const WelcomeMountainView: React.FC = () => {
    return (
        <svg className="welcome-mountain-image" viewBox="0 0 1150 547" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M-8.00696 156.706L279.59 10.9566C308.403 -3.64674 342.456 -3.65219 371.269 10.9402L578.471 115.862C616.999 135.371 662.522 135.398 701.071 115.927L805.205 63.341C824.687 53.5019 847.705 53.5673 867.132 63.5209L1049.04 156.706L1150 206.311V544.275L-8.00696 547V156.706Z" fill="url(#mountain-linear)" />
            <defs>
                <linearGradient id="mountain-linear" x1="572.518" y1="84.8919" x2="565.901" y2="1241.58" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#B7F7F3" />
                    <stop offset="0.348958" stopColor="white" />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default WelcomeMountainView;