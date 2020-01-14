import React from 'react';

const UpdatesView: React.FC = () => {
  return (
    <>
      <div className="updates-card__container">
        <div className="updates-card__card">
          <div className="updates-card__title-container">
            <span className="updates-card__blinker"></span>
            <span className="updates-card__title">Live Updates</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatesView;
