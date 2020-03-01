import React from 'react';
import LinkedInLinksView from '../linkedinlinks/linkedinlinks.view';


interface BoxProps {
    [index: string]: {
        projectTitle: string;
        projectDescription: string;
        category: string;
        path: string;
        listOfWinners: {
            name: string;
            linkedin: string;
        }[];
    }[];
};

function LeftBoxView(props) {
    return (
        <div className="post-landing-winner__project-container">
            <div className="post-landing-winner__box-container">
                <div className="post-landing-winner__top-box">
                    <div className="post-landing-winner__banner">
                        <p className="post-landing-winner__banner-text">Winner</p>
                    </div>
                    <img className="post-landing-winner__image" src={require('./winnerimages/' + props.path + '.png')} alt={`${props.projectTitle} Icon`}/>
                </div>
                <div className="post-landing-winner__bottom-box">
                    <p className="post-landing-winner__title">{props.title}</p>
                    <p className="post-landing-winner__description">{props.description}</p>
                </div>
            </div>
            <div className="post-landing-winner__linkedin-links-container">
                <p className="post-landing-winner__category-name">Tech Cares - {props.category}</p>
                <LinkedInLinksView ListOfWinners={props.listOfWinners} />
            </div>
        </div>
    );
}

function RightBoxView(props) {
    return(
        <div className="post-landing-winner__project-container">
            <div className="post-landing-winner__linkedin-links-container">
                <p className="post-landing-winner__category-name">Tech Cares - {props.category}</p>
                <LinkedInLinksView ListOfWinners={props.listOfWinners} />
            </div>
            <div className="post-landing-winner__box-container">
                <div className="post-landing-winner__top-box">
                    <div className="post-landing-winner__banner">
                        <p className="post-landing-winner__banner-text">Winner</p>
                    </div>
                    <img className="post-landing-winner__image" src={require('./winnerimages/' + props.path + '.png')} alt={`${props.projectTitle} Icon`}/>
                </div>
                <div className="post-landing-winner__bottom-box">
                    <p className="post-landing-winner__title">{props.title}</p>
                    <p className="post-landing-winner__description">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

const WinnersBoxView: React.FC<BoxProps> = (BoxProps) => {
    return(
        <>
            {BoxProps.BoxProps.map((winner, i) => (
                i===1 ? <RightBoxView key={winner.projectTitle} title={winner.projectTitle} description={winner.projectDescription} category={winner.category} path={winner.path} listOfWinners={winner.listOfWinners}/> 
                : <LeftBoxView key={winner.projectTitle} title={winner.projectTitle} description={winner.projectDescription} category={winner.category} path={winner.path} listOfWinners={winner.listOfWinners}/>
            ))}
        </>
    );
};

export default WinnersBoxView;