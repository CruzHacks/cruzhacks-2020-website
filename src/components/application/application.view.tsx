import React from 'react';
import DemographicsView from './forms/demographics.view';
const ApplicationView: React.FC = () => {
  return (
    <>
      <div className="application">
        <DemographicsView />
      </div>
    </>
  );
};

export default ApplicationView;
