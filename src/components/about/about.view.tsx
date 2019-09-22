import React from 'react';
import AboutTitleView from './text/about-title.view';
import AboutSubtitleView from './text/about-subtitle.view';
import AboutDescriptionView from './text/about-description.view';

const AboutView: React.FC = () => {
  return (
    <div className="about__text-container">
      <AboutTitleView />
      <AboutSubtitleView />
      <AboutDescriptionView />
    </div>
  );
};

export default AboutView;
