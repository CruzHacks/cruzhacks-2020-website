import React from 'react';
import SponsorsContainer from './container/sponsors-container.view';

const logos = [
  {
    tier: 'tera',
    logo: '',
    URL: '',
    name: '',
  },
];

const SponsorsView: React.FC = () => {
  return (
    <div className="sponsors__container">
      <SponsorsContainer logos={logos} />
    </div>
  );
};

export default SponsorsView;
