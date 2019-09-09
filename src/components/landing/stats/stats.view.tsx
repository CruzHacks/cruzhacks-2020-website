import React from 'react';
import StatsTreeView from './tree/stats-tree.view';

const StatsView: React.FC = () => {
  return (
    <>
      <div className="stats__container">
        <span className="stats__title">Milestones of 2019</span>
        <StatsTreeView />
      </div>
    </>
  );
};

export default StatsView;
