import React from 'react';
import Backdrop from '../live/background/backdrop.view';
// import Navbar from '../live/navbar/navbar.view';
import HeroLightBulb from '../landing/hero/header/hero-lightbulb.view';
import HeroNavbarView from '../landing/hero/header/navbar/hero-navbar.view';
import ScheduleView from '../live/homepage/schedule/schedule.view';

const SchedulePage: React.FC = () => {
  return (
    <div className="schedulepage__container">
      <HeroLightBulb />
      <Backdrop />
      <HeroNavbarView />
      {/* <span className="homepage__title">CruzHacks 2020 Event Scheduke</span> */}
      <div className="homepage__cards-container">
        <ScheduleView />
      </div>
    </div>
  );
};

export default SchedulePage;
