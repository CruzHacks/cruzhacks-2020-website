import React from 'react';
import spinner from '../../assets/login/loading.svg';

const LoadingView: React.FC = () => {
  return (
    <div className="spinner">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default LoadingView;
