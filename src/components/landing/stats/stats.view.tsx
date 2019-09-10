import React from 'react';
import StatsTreeView from './tree/stats-tree.view';
import StatsBoxView from './box/stats-box.view';

type StatsProps = {
  stats: [];
};

const StatsView: React.FC<StatsProps> = Props => {
  return (
    <>
      <div className="stats__container">
        <h1 className="stats__title">Milestones of 2019</h1>
        <StatsTreeView />
        <StatsBoxView stats={Props.stats} />
      </div>
    </>
  );
};

export default StatsView;
