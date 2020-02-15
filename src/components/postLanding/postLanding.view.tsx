import React from 'react';
import PostLandingHeroView from './hero/postLandingHero.view';

const PostLandingView: React.FC = () => {
  return (
    <>
      <div className="post-landing__container">
        <PostLandingHeroView />
      </div>
    </>
  );
};

export default PostLandingView;
