import React from 'react';
import StatsTreeView from './tree/stats-tree.view';
import StatsBoxView from './box/stats-box.view';

const categories: string[] = [
  'attendees',
  'first time hackers',
  'projects',
  '$ in prizes',
];

const stats: string[] = ['500+', '47%', '80+', '10,000+'];

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
