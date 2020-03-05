import React from 'react';
import CTAbuttonView from '../../controls/ctaButton';

const PostLandingCTAview: React.FC = () => {
  const packetButtonProps = [
    {
      color: { background: '#5dcec6' },
      text: '2020 SPONSORSHIP PACKET',
      link:
        'https://drive.google.com/file/d/1_a1ybnqm1AMRUCTjO_jPJFXiq0WjdPeU/view',
    },
  ];
  const mailButtonProps = [
    {
      color: { background: '#5dcec6' },
      text: 'BRING YOUR COMPANY TO 2021',
      link: 'mailto:sponsor@cruzhacks.com',
    },
  ];
  return (
    <>
      <div className="postLanding-cta__container">
        <span className="postLanding-cta__title">Help shape our future</span>
        <span className="postLanding-cta__info">
          Each year, we strive to deliver an exciting, inclusive, and fun event
          focused on social good. This requires a considerable amount of
          wo/manpower and resources towards logistics, food, electricity,
          internet, merch, and more for the ~40 continuous hours that CruzHacks
          spans. Help us put on 2021!
        </span>
        <div className="postLanding-cta__button-container">
          <CTAbuttonView info={packetButtonProps} />
          <CTAbuttonView info={mailButtonProps} />
        </div>
      </div>
    </>
  );
};

export default PostLandingCTAview;
