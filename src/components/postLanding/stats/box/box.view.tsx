import React from 'react';

interface BoxProps {
  [index: string]: { category: string; stat: string }[];
}

export const PostLandingStatsBoxView: React.FC<BoxProps> = BoxProps => {
  return (
    <>
      <div className="post-landing-stats__box-container">
        {BoxProps.stats.map(metric => (
          <div className="post-landing-stats__box" key={metric.category}>
            <span className="post-landing-stats__box-stat">{metric.stat}</span>
            <span className="post-landing-stats__box-category">{metric.category}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostLandingStatsBoxView;
