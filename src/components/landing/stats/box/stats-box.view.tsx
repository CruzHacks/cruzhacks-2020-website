import React from 'react';

interface BoxProps {
  Category: String;
  Stat: String;
}

const StatsBoxView: React.FC<BoxProps> = ({ Category, Stat }) => {
  return (
    <>
      <div className="stats__box"></div>
    </>
  );
};

export default StatsBoxView;
