import React from 'react';
import PhotosBackdropView from './backdrop/postLandingPhotosBackdrop.view';

const PostLandingPhotosView: React.FC = () => {
  return (
    <>
      <div className="postLanding-photos__container">
        <div className="postLanding-photos__backdropContainer">
          <PhotosBackdropView />
        </div>
        <div className="postLanding-photos__linkContainer">
          <img
            src={require('../../../assets/postLanding/photoThumb/cruzhacksGallery.png')}
            alt="CruzHacks 2020 Gallery"
            className="postLanding-photos__thumbnail"
          />
        </div>
      </div>
    </>
  );
};

export default PostLandingPhotosView;
