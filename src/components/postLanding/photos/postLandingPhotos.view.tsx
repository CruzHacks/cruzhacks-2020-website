import React from 'react';
import PhotosBackdropView from './backdrop/PhotosBackdrop.view';

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
          <div className="postLanding-photos__buttonContainer">
            <a
              href="https://photos.app.goo.gl/eoGj1LDYrNEuHNTw9"
              target="__blank"
              rel="noopener norefferer"
              className="postLanding-photos__button"
            >
              <span className="postLanding-photos__buttonText">
                PHOTO ALBUM
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostLandingPhotosView;
