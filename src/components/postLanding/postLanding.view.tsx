import React from 'react';
import PostLandingHeroView from './hero/postLandingHero.view';
import PostLandingAboutView from './about/about.view';
import PostLandingStatsView from './stats/stats.view';
import PostLandingInfoView from './info/info.view';
import PostLandingProjectsView from './projects/projects.view';
import PostLandingWinnersView from './winners/winners.view';
import PostLandingNewsView from './news/postLandingNews.view';
import PostLandingPhotosView from './photos/postLandingPhotos.view';
import SponsorsView from '../landing/sponsors/sponsors.view';
import PostLandingCTAview from './cta/postLandingCTA.view';
import PostLandingShareView from './share/postLandingShare.view';

const PostLandingView: React.FC = () => {
  return (
    <>
      <a
        href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
        id="mlh-trust-badge"
        target="__blank"
      >
        <img
          alt="Major League Hacking 2020 Hackathon Season"
          src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-gray.svg"
          id="mlh-trust-badge-img"
        />
      </a>
      <div className="postLanding__container">
        <PostLandingHeroView />
        <PostLandingAboutView />
        <PostLandingStatsView />
        <PostLandingInfoView />
        <PostLandingProjectsView />
        <PostLandingWinnersView />
        <PostLandingNewsView />
        <PostLandingPhotosView />
        <SponsorsView />
        <PostLandingCTAview />
        <PostLandingShareView />
      </div>
    </>
  );
};

export default PostLandingView;
