import React from 'react';
import Navbar from '../navbar/navbar.view';
import Backdrop from '../background/backdrop.view';
import QuestionView from './question/question.view';
import UpdatesView from './updates/updates.view';
import ScheduleView from './schedule/schedule.view';
import WorkshopsView from './workshops/workshops.view';

const LiveHomepage: React.FC = () => {
  return (
    <div className="homepage__container">
      <Backdrop />
      <Navbar />
      <span className="homepage__title">CruzHacks 2020 Live</span>
      <UpdatesView />
      <ScheduleView />
      <WorkshopsView />
      <QuestionView />
    </div>
  );
};

export default LiveHomepage;
