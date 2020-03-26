import React from 'react';
import LinkedInLinksView from '../linkedinlinks/linkedinlinks.view';

interface BoxProps {
  [index: string]: {
    projectTitle: string;
    projectDescription: string;
    category: string;
    path: string;
    devpost: string;
    listOfWinners: {
      name: string;
      linkedin: string;
    }[];
  }[];
}

function LeftBoxView(props) {
  return (
    <div className="post-landing-winner__project-container">
      <div className="post-landing-winner__box-container">
        <a
          className="post-landing-winner__devpost"
          href={props.devpost}
          target="__blank"
          rel="noopener noreferrer"
        >
          <div className="post-landing-winner__top-box">
            <div className="post-landing-winner__banner" />
            <img
              className="post-landing-winner__image"
              src={require('./winnerimages/' + props.path + '.png')}
              alt={`${props.projectTitle} Icon`}
            />
          </div>
          <div className="post-landing-winner__bottom-box">
            <p className="post-landing-winner__title">{props.title}</p>
            <p className="post-landing-winner__description">
              {props.description}
            </p>
          </div>
        </a>
      </div>
      <div className="post-landing-winner__linkedin-links-container">
        <p className="post-landing-winner__category-name">
          Tech Cares - {props.category}
        </p>
        <LinkedInLinksView ListOfWinners={props.listOfWinners} />
      </div>
    </div>
  );
}

function RightBoxView(props) {
  return (
    <div className="post-landing-winner__project-container">
      <div className="post-landing-winner__linkedin-links-container">
        <p className="post-landing-winner__category-name">
          Tech Cares - {props.category}
        </p>
        <LinkedInLinksView ListOfWinners={props.listOfWinners} />
      </div>
      <div className="post-landing-winner__box-container">
        <a
          className="post-landing-winner__devpost"
          href={props.devpost}
          target="__blank"
          rel="noopener noreferrer"
        >
          <div className="post-landing-winner__top-box">
            <div className="post-landing-winner__banner" />
            <img
              className="post-landing-winner__image"
              src={require('./winnerimages/' + props.path + '.png')}
              alt={`${props.projectTitle} Icon`}
            />
          </div>
          <div className="post-landing-winner__bottom-box">
            <p className="post-landing-winner__title">{props.title}</p>
            <p className="post-landing-winner__description">
              {props.description}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

const WinnersBoxView: React.FC<BoxProps> = BoxProps => {
  return (
    <>
      {BoxProps.BoxProps.map((winner, i) =>
        i === 1 ? (
          <RightBoxView
            key={winner.projectTitle}
            title={winner.projectTitle}
            description={winner.projectDescription}
            category={winner.category}
            path={winner.path}
            devpost={winner.devpost}
            listOfWinners={winner.listOfWinners}
          />
        ) : (
          <LeftBoxView
            key={winner.projectTitle}
            title={winner.projectTitle}
            description={winner.projectDescription}
            category={winner.category}
            path={winner.path}
            devpost={winner.devpost}
            listOfWinners={winner.listOfWinners}
          />
        )
      )}
    </>
  );
};

export default WinnersBoxView;
