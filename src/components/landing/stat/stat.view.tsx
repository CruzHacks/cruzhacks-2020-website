import React from 'react';
import StatTreeView from './tree/stat-tree.view';

const StatView: React.FC = () => {
  return (
    <>
      <div className="stat__container">
        <span className="stat__title">Milestones of 2019</span>
        <StatTreeView />
      </div>
    </>
  );
};

export default StatView;
