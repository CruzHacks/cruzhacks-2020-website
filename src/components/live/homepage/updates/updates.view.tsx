import React from 'react';

const UpdatesView: React.FC = () => {
  return (
    <>
      <div className="homepage__updates-card-container">
        <div className="homepage__updates-card">
          <span className="homepage__live-update-title">
            <span className="homepage__live-update-blinker"></span>
            Live Updates
          </span>
        </div>
      </div>
    </>
  );
};

export default UpdatesView;
