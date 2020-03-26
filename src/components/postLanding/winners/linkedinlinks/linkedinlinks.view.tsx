import React from 'react';

interface WinnerList {
  [index: string]: {
    name: string;
    linkedin: string;
  }[];
}

const LinkedInLinksView: React.FC<WinnerList> = (
  ListOfWinners,
  category: string
) => {
  return (
    <>
      {ListOfWinners.ListOfWinners.map(person => (
        <div
          className="post-landing-winner__linkedin-container"
          key={person.name}
        >
          <a
            className={'post-landing-winner__linkedin-button'}
            href={person.linkedin}
            key={person.name}
            target="__blank"
            rel="noopener noreferrer"
          >
            <img
              className="post-landing-winner__linkedin-logo"
              src={require('./linkedin.svg')}
              alt="Linkedin logo"
            />
          </a>
          <p className="post-landing-winner__winner-name">{person.name}</p>
        </div>
      ))}
    </>
  );
};

export default LinkedInLinksView;
