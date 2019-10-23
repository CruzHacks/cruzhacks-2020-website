import React from 'react';
import StatsTreeView from './tree/stats-tree.view';
import StatsBoxView from './box/stats-box.view';

let stats = [
  {
    category: 'attendees',
    stat: '600+',
  },
  {
    category: 'first time hackers',
    stat: '47%',
  },
  {
    category: 'projects',
    stat: '80+',
  },
  {
    category: '$ in prizes',
    stat: '10,000+',
  },
];

const StatsView: React.FC = () => {
  return (
    <>
      <div className="stats__container">
        <span className="stats__title">Milestones of 2019</span>
        <StatsTreeView />
        <StatsBoxView stats={stats} />
      </div>
    </>
  );
};

export default StatsView;
