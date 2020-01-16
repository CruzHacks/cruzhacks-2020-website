import React, {useState} from 'react';
import DayOneSchedule from './dayone/dayone.view';
import DayTwoSchedule from './daytwo/daytwo.view';
import DayThreeSchedule from './daythree/daythree.view';

const ScheduleView: React.FC = () => {

  const [isDayOne, setDayOne] = useState(true);
  const [isDayTwo, setDayTwo] = useState(false);
  const [isDayThree, setDayThree] = useState(false);

  function onToggle(day: String) {
    switch(day){
      case "one":
        setDayOne(true);
        setDayTwo(false);
        setDayThree(false);

        break;
      case "two":
        setDayOne(false);
        setDayTwo(true);
        setDayThree(false);

        break;
      case "three":
        setDayOne(false);
        setDayTwo(false);
        setDayThree(true);

        break; 
    }
  }

  return (
    <>
      <div className="gen-schedule__container">
        <div className="gen-schedule__card">
          <span className="gen-schedule__title">
            General Schedule
          </span>
          <div className="gen-schedule__links">
            <div className="gen-schedule__day-one-container">
              <button 
                type="button" 
                className={`gen-schedule__link-day-one ${isDayOne ? 'active' : ''}` }
                onClick={() => onToggle("one")}
              >
                Day 1
              </button>
            </div>
            <div className="gen-schedule__day-two-container">
              <button 
                type="button" 
                className={`gen-schedule__link-day-two ${isDayTwo ? 'active' : ''}` }
                onClick={() => onToggle("two")}
              >
                Day 2
              </button>
            </div>
            <div className="genSchedule__day-three-container">
              <button 
                type="button" 
                className={`gen-schedule__link-day-three ${isDayThree ? 'active' : ''}`} 
                onClick={() => onToggle("three")}
              >
                Day 3
              </button>
            </div>
          </div>
          <div className="gen-schedule__schedules">
            {isDayOne === true 
            ? <DayOneSchedule/> 
            : isDayTwo === true
              ? <DayTwoSchedule/>
              : <DayThreeSchedule/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleView;
