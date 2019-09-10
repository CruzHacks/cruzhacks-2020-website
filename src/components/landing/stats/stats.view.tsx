import React from 'react';
import StatsTreeView from './tree/stats-tree.view';
import StatsBoxView from './box/stats-box.view';

const StatsView: React.FC = () => {
  return (
    <>
      <div className="stats__container">
        <h1 className="stats__title">Milestones of 2019</h1>
        <StatsTreeView />
      </div>
    </>
  );
};

export default StatsView;
