import React from 'react';

interface BoxProps {
  [index: string]: { category: string; stat: string }[];
}

export const StatsBoxView: React.FC<BoxProps> = BoxProps => {
  return (
    <>
      <div className="stats__box-container">
        {BoxProps.stats.map(metric => (
          <div className="stats__box">
            <span className="stats__stat">{metric.stat}</span>
            <span className="stats__category">{metric.category}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsBoxView;
