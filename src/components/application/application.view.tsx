import React, { useState } from 'react';
import DemographicsView from './forms/demographics.view';

const ApplicationView: React.FC = () => {
  return (
    <>
      <div className="application">
        <div className="application__titleBar">
          <span className="application__titleBar-text">APPLICATION</span>
        </div>
        <DemographicsView />
        <div className="application_pagination">
          <span className="application_progress"></span>
          <div className="application_pageButtons"></div>
        </div>
      </div>
    </>
  );
};

export default ApplicationView;
