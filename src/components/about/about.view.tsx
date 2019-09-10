// TODO - complete
import React from 'react';
import AboutLaptopView from './about-laptop.view';
import AboutTitleView from './about-title.view';
import AboutSubtitleView from './about-subtitle.view';
import AboutDescriptionView from './about-description.view';
import AboutPlaceholderView from './about-placeholder.view';

const AboutView: React.FC = () => {
    return (
      <>
        <AboutLaptopView />
        <AboutPlaceholderView />
        <AboutTitleView />
        <AboutSubtitleView />
        <AboutDescriptionView />
      </>
    );
};

export default AboutView;