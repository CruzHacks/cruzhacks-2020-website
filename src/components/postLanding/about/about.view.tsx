import React from 'react';
import LeftBackdropView from './backdrop/leftbackdrop.view';
import RightBackdropView from './backdrop/rightbackdrop.view';

const PostLandingAboutView: React.FC = () => {
  return (
    <>
      <div className="post-landing-about__container">
        <LeftBackdropView />

        <div className="post-landing-about__description-container">
          <RightBackdropView />
          <div className="post-landing-about__text-container">
            <div className="post-landing-about__title-container">
              <span className="post-landing-about__title">
                {' '}
                We're Not Just A Hackathon
              </span>
            </div>
            <span className="post-landing-about__text">
              From January 17 to January 19, 2020, UCSC’s Stevenson Event Center
              was transformed into a bustling playground for over 450 hackers.
              The 36 hours of hacking were challenging, yet invaluably
              productive. As hackers downed bottle after bottle of Yerba Mate
              and LIFEAID, mentors and tech representatives helped your visions
              for social change manifest into tangible projects.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLandingAboutView;
