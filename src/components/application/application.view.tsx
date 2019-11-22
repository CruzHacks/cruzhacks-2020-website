import React from 'react';
import DemographicsView from './forms/demographics.view';
import ExperiencesView from './forms/experiences.view';
import LogisticsView from './forms/logistics.view';

const ApplicationView: React.FC = () => {
  return (
    <>
      <div className="application">
        <div className="application__titleBar">
          <span className="application__titleBar-text">APPLICATION</span>
        </div>
        <DemographicsView />
        <ExperiencesView />
        <LogisticsView/>
      </div>
    </>
  );
};

export default ApplicationView;
