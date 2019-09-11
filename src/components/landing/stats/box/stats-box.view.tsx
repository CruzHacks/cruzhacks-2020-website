import React, { ReactNode } from 'react';

type BoxProps = {
  stats: {
    category: string;
    stat: string;
  }[];
};

export const StatsBoxView: React.FC<BoxProps> = BoxProps => {
  return (
    <>
      {/* BoxProps.stats.map(metric => ) */}
      <div className="stats__box">
        <span className="stats__stat">{}</span>
        <span className="stats__category">{}</span>
      </div>
    </>
  );
};

export default StatsBoxView;
