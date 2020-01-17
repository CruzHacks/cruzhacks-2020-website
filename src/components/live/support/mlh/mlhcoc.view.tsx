import React from 'react';

const MLHCodeOfConductCardView: React.FC = () => {
    return(
        <div className="mlhcoc-support__container">
            <div className="mlhcoc-support__card">
                <div className="mlhcoc-support__title">
                    MLH Code of Conduct
                </div>
                <span className="mlhcoc-support__description">
                    Cruzhacks values the importance of a safe and all-inclusive space. 
                    We welcome students from all backgrounds. All attendees must adhere to our Code of Conduct.
                </span>
                <div className="mlhcoc-support__button-container">
                    <a 
                    className="mlhcoc-support__link" 
                    href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                        View Code Of Conduct
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MLHCodeOfConductCardView; 