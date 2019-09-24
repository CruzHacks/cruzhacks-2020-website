import React from 'react';
import AboutTitleView from './text/about-title.view';
import AboutSubtitleView from './text/about-subtitle.view';
import AboutDescriptionView from './text/about-description.view';

const AboutView: React.FC = () => {
  return (
    <div className="about__container">
      <div className="about-text__container">
        <AboutTitleView />
        <AboutSubtitleView />
        <AboutDescriptionView />
      </div>

    </div>
  );
};

export default AboutView;
