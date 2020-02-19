import React from 'react';
import PostLandingHeroView from './hero/postLandingHero.view';
import PostLandingShareView from './share/postLandingShare.view';
import PostLandingCTAview from './cta/postLandingCTA.view';

const PostLandingView: React.FC = () => {
  return (
    <>
      <div className="postLanding__container">
        <PostLandingHeroView />
        <PostLandingCTAview />
        <PostLandingShareView />
      </div>
    </>
  );
};

export default PostLandingView;
