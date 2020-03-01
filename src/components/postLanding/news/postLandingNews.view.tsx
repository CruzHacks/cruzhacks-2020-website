import React from 'react';
import NewsBackdropView from './backdrop/NewsBackdrop.view';

const PostLandingNewsView: React.FC = () => {
  return (
    <>
      <div className="postLanding-news__container">
        <div className="postLanding-news__backdrop-container">
          <NewsBackdropView />
        </div>
        <div className="postLanding-news__title-container">
          <p className="postLanding-news__title">CruzHacks in the News</p>
        </div>
      </div>
    </>
  );
};

export default PostLandingNewsView;
