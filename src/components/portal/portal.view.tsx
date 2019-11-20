import React, { useState } from 'react';
import ApplicationView from '../application/application.view';
import { NavLink } from 'react-router-dom';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';

const PortalView: React.FC = () => {
  return (
    <>
      <div className="portal">
        <div className="portal__titleBar">
          <HeroLightBulbView />>
          <span className="portal__titleBar-title">Dashboard</span>
          <span className="portal__titleBar-logout">Log out</span>
        </div>
        <div className="portal__appStatus"></div>
        <div className="portal__announcements"></div>
        <div className="portal__application">
          <ApplicationView />
        </div>
      </div>
    </>
  );
};

export default PortalView;
