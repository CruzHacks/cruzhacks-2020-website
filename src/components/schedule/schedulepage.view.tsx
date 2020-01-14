import React from 'react';
import Backdrop from '../live/background/backdrop.view';
import Navbar from '../live/navbar/navbar.view';
import ScheduleView from '../live/homepage/schedule/schedule.view';

const SchedulePage: React.FC = () => {
  return (
    <div className="schedulepage__container">
      <Backdrop />
      <Navbar />
      <span className="homepage__title">CruzHacks 2020 Live</span>
      <div className="homepage__cards-container">
        <ScheduleView />
      </div>
    </div>
  );
};

export default SchedulePage;
