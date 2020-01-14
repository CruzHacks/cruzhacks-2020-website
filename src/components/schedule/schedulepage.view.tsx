import React from 'react';
import Backdrop from '../live/background/backdrop.view';
// import Navbar from '../live/navbar/navbar.view';
import HeroLightBulb from '../landing/hero/header/hero-lightbulb.view';
import HeroNavbarView from '../landing/hero/header/navbar/hero-navbar.view';
import ScheduleView from '../live/homepage/schedule/schedule.view';

const SchedulePage: React.FC = () => {
  return (
    <div className="schedulepage__container">
      <Backdrop />
      <div style={{ margin: 'auto' }}>
        <ScheduleView />
      </div>
    </div>
  );
};

export default SchedulePage;
