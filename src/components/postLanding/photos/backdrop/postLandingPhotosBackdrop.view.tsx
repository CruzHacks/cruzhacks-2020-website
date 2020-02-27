import React from 'react';
import { ReactComponent as Miniscus } from './miniscus.svg';

const PhotosBackdropView: React.FC = () => {
  return (
    <>
      <div className="postLanding-photos__backdrop">
        <Miniscus />
      </div>
    </>
  );
};

export default PhotosBackdropView;
