import React from 'react';
import PostLandingHeroView from './hero/postLandingHero.view';
import PostLandingShareView from './share/postLandingShare.view';

const PostLandingView: React.FC = () => {
  return (
    <>
      <div className="post-landing__container">
        <PostLandingHeroView />
        <PostLandingShareView />
      </div>
    </>
  );
};

export default PostLandingView;
