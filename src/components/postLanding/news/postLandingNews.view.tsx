import React from 'react';
import NewsBackdropView from './backdrop/NewsBackdrop.view';

const PostLandingNewsView: React.FC = () => {
  return (
    <>
      <div className="postLanding-news__container">
        <NewsBackdropView />
      </div>
    </>
  );
};

export default PostLandingNewsView;
