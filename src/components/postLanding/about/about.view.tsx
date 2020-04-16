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
              was transformed into a playground for hacking solutions to the
              world's problems. As 450 hackers downed bottle after bottle of
              Yerba Mate and LIFEAID, visions of social good manifested into
              tangible solutions. Here, we present a handful of projects that
              excel in their approach, planning, and potential.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLandingAboutView;
