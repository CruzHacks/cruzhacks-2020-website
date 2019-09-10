import React, { ReactNode } from 'react';

type BoxProps = {
  children?: ReactNode;
};

const StatsBoxView: React.FC<BoxProps> = children => {
  return (
    <>
      {children.map()}
      <div className="stats__box">
        <span className="stats__stat">{Stat}</span>
        <span className="stats__category">{Category}</span>
      </div>
    </>
  );
};

export default StatsBoxView;
