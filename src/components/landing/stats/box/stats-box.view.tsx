import React from 'react';

interface BoxProps {
  [index: string]: { category: string; stat: string }[];
}

export const StatsBoxView: React.FC<BoxProps> = BoxProps => {
  return (
    <>
      <div className="stats__box-container">
        {BoxProps.stats.map(metric => (
          <div className="stats__box" key={metric.category}>
            <span className="stats__box-stat">{metric.stat}</span>
            <span className="stats__box-category">{metric.category}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default StatsBoxView;
