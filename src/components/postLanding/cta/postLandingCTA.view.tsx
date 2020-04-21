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
  const organizeButtonProps = [
    {
      text: 'GET INVOLVED AT CRUZHACKS',
      link:
        'https://docs.google.com/document/d/1WAWdIKNvgQ3Ckvkpa_nk0ymabH-dXKksTc1gE1bLMuY',
      className: 'ctaButtonOrganize',
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
          <CTAbuttonView info={organizeButtonProps} />
        </div>
      </div>
    </>
  );
};

export default PostLandingCTAview;
