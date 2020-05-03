import React from 'react';
import CTAbuttonView from '../../controls/ctaButton';

const PostLandingCTAview: React.FC = () => {
  const packetButtonProps = [
    {
      text: '2020 SPONSORSHIP PACKET',
      link:
        'https://drive.google.com/file/d/1_a1ybnqm1AMRUCTjO_jPJFXiq0WjdPeU/view',
      className: 'ctaButton',
    },
  ];
  const sponsorButtonProps = [
    {
      text: 'CONNECT WITH US',
      link: 'mailto:contact@cruzhacks.com',
      className: 'ctaButton',
    },
  ];
  return (
    <>
      <div className="postLanding-cta__container">
        <span className="postLanding-cta__title">Help shape our future</span>
        <span className="postLanding-cta__info">
          The CruzHacks team strives to deliver exciting, inclusive, and fun
          events focused on social good. Let's culture creativity in our
          community!
        </span>
        <div className="postLanding-cta__button-container">
          <CTAbuttonView info={packetButtonProps} />
          <CTAbuttonView info={sponsorButtonProps} />
        </div>
      </div>
    </>
  );
};

export default PostLandingCTAview;
