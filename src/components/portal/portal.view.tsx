import React, { useState } from 'react';
import ApplicationView from '../application/application.view';
import { NavLink } from 'react-router-dom';
import HeroLightBulbView from '../landing/hero/header/hero-lightbulb.view';

const PortalView: React.FC = () => {
  return (
    <>
      <div className="portal">
        <div className="portal__navbar">
          <HeroLightBulbView />
          <div className="portal__navbar-text-container">
            <span className="portal__navbar-title">Dashboard</span>
            <span className="portal__navbar-logout">Log out</span>
          </div>
        </div>
        <div className="portal__appstatus">
          <div className="portal__appstatus-container">
            <span className="portal__appstatus-text">
              Your application is under review. Days until CruzHacks:
            </span>
            <div className="portal__appstatus-status-container"></div>
          </div>
        </div>
        <div className="portal__announcements">
          <div className="portal__announcements-container">
            <span className="portal__announcements-styletext">ANNOUNCEMENTS</span>
            <div className="portal__announcements-box"></div>
          </div>
        </div>
        <div className="portal__application">
          <ApplicationView />
        </div>
      </div>
    </>
  );
};

export default PortalView;
