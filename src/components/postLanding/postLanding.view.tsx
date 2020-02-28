import React from 'react';
import PostLandingHeroView from './hero/postLandingHero.view';
import PostLandingShareView from './share/postLandingShare.view';
import PostLandingCTAview from './cta/postLandingCTA.view';
import PostLandingPhotosView from './photos/postLandingPhotos.view';
import SponsorsView from '../landing/sponsors/sponsors.view';
import PostLandingAboutView from './about/about.view';
import PostLandingStatsView from './stats/stats.view';
import PostLandingInfoView from './info/info.view';
import PostLandingProjectsView from './projects/projects.view';
import PostLandingWinnersView from './winners/winners.view';

const PostLandingView: React.FC = () => {
  return (
    <>
      <div className="postLanding__container">
        <PostLandingHeroView />
        <PostLandingAboutView />
        <PostLandingStatsView />
        <PostLandingInfoView />
        <PostLandingProjectsView />
        <PostLandingWinnersView />
        <PostLandingPhotosView />
        <SponsorsView />
        <PostLandingCTAview />
        <PostLandingShareView />
      </div>
    </>
  );
};

export default PostLandingView;
