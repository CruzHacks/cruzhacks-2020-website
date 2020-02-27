import React from 'react';
import PhotosBackdropView from './backdrop/postLandingPhotosBackdrop.view';

const PostLandingPhotosView: React.FC = () => {
  return (
    <>
      <div className="postLanding-photos__container">
        <PhotosBackdropView />
      </div>
    </>
  );
};

export default PostLandingPhotosView;
