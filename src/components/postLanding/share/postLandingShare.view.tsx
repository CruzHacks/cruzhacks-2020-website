import React from 'react';
import { ReactComponent as Pillars } from './pillars.svg';
import { ReactComponent as Squiggle } from './squiggle.svg';
import ShareLinksView from './links/ShareLinks.view';

const PostLandingShareView: React.FC = () => {
  const profiles = [
    {
      type: 'slack',
      copy: () => {
        const el = document.createElement('textarea');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      },
    },
    {
      type: 'twitter',
      link: 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fcruzhacks.com',
    },
    {
      type: 'facebook',
      link:
        'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcruzhacks.com',
    },
    {
      type: 'linkedin',
      link:
        'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fcruzhacks.com',
    },
  ];

  return (
    <>
      <div className="postLanding-share__container">
        <div className="postLanding-share__pillars">
          <Pillars />
        </div>
        <ShareLinksView accounts={profiles} />
        <div className="postLanding-share__squiggle">
          <Squiggle />
        </div>
      </div>
    </>
  );
};

export default PostLandingShareView;
