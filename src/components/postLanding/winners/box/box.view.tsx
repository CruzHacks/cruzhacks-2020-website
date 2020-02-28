import React from 'react';
import LinkedInLinksView from '../linkedinlinks/linkedinlinks.view';

interface BoxProps {
    [index: string]: {
        projectTitle: string;
        projectDescription: string;
        category: string;
        listOfWinners: {
            name: string;
            linkedin: string;
        }[];
    }[];
};

const WinnersBoxView: React.FC<BoxProps> = (BoxProps) => {
    return(
        <>
            {BoxProps.BoxProps.map(winner => (
                <div key={winner.projectTitle} className="post-landing-winner__project-container">
                    <div className="post-landing-winner__box-container">
                        <div className="post-landing-winner__top-box">
                            {/* image goes here */}
                        </div>
                        <div className="post-landing-winner__bottom-box">
                            <p className="post-landing-winner__title">{winner.projectTitle}</p>
                            <p className="post-landing-winner__description">{winner.projectDescription}</p>
                        </div>
                    </div>
                    <div className="post-landing-winner__linkedin-links-container">
                        <p className="post-landing-winner__category-name">Tech Cares - {winner.category}</p>
                        <LinkedInLinksView ListOfWinners={winner.listOfWinners} />
                    </div>
                </div>
            ))}
        </>
    );
};

export default WinnersBoxView;