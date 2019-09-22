import React from 'react';
import AboutBackdropView from './backdrop/backdrop.view';

const AboutView: React.FC = () => {
  return (
    <section className="about-view-container">
      <AboutBackdropView />
    </section>
  );
};

export default AboutView;
