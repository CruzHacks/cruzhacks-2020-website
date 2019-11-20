import React from 'react';
import DemographicsView from './forms/demographics.view';
const ApplicationView: React.FC = () => {
  return (
    <>
      <div className="application">
        <div className="application__titleBar">
          <span className="application__titleBar-text">APPLICATION</span>
        </div>
        <DemographicsView />
      </div>
    </>
  );
};

export default ApplicationView;
