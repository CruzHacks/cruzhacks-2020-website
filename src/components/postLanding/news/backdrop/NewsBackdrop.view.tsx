import React from 'react';
import { ReactComponent as PillarsLeft } from './pillarsLeft.svg';
import { ReactComponent as PillarsRight } from './pillarsRight.svg';

const NewsBackdropView: React.FC = () => {
  return (
    <>
      <div className="postLanding-news__backdrop-container">
        <div className="postLanding-news__pillarsLeft">
          <PillarsLeft />
        </div>
        <div className="postLanding-news__pillarsRight">
          <PillarsRight />
        </div>
      </div>
    </>
  );
};

export default NewsBackdropView;
