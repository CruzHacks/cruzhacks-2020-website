import React from 'react';
import AboutBackdropView from './backdrop/backdrop.view';
import AboutTitleView from './about-title.view';
import AboutSubtitleView from './about-subtitle.view';
import AboutDescriptionView from './about-description.view';
import AboutPlaceHolderView from './about-placeholder.view';

const AboutView: React.FC = () => {
  return (
    <div className="about-view-container">
      <AboutBackdropView />
      <div className="about-text-area-view-container">
        <AboutTitleView />
        <AboutSubtitleView />
        <AboutDescriptionView />
        <AboutPlaceHolderView />
      </div>
    </div>
  );
};

export default AboutView;
