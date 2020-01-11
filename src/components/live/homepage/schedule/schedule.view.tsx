import React, {useState} from 'react';
import DayOneSchedule from './dayone/dayone.view';
import DayTwoSchedule from './daytwo/daytwo.view';
import DayThreeSchedule from './daythree/daythree.view';

const ScheduleView: React.FC = () => {

  const [isDayOne, setDayOne] = useState(true);
  const [isDayTwo, setDayTwo] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isDayThree, setDayThree] = useState(false);

  function onToggle(day: String) {
    switch(day){
      case "one":
        var one = document.getElementsByClassName("gen-schedule__link-day-one");
        one[0].className += " active"

        var two = document.getElementsByClassName("gen-schedule__link-day-two");
        two[0].className = two[0].className.replace("active", "");

        var three = document.getElementsByClassName("gen-schedule__link-day-three");
        three[0].className = three[0].className.replace("active", "");
        
        setDayOne(true);
        setDayTwo(false);
        setDayThree(false);

        break;
      case "two":
        var two2 = document.getElementsByClassName("gen-schedule__link-day-two");
        two2[0].className += " active"

        var one2 = document.getElementsByClassName("gen-schedule__link-day-one");
        one2[0].className = one2[0].className.replace("active", "");

        var three2 = document.getElementsByClassName("gen-schedule__link-day-three");
        three2[0].className = three2[0].className.replace("active", "");
        
        setDayOne(false);
        setDayTwo(true);
        setDayThree(false);

        break;
      case "three":
        var three3 = document.getElementsByClassName("gen-schedule__link-day-three");
        three3[0].className += " active"

        var one3 = document.getElementsByClassName("gen-schedule__link-day-one");
        one3[0].className = one3[0].className.replace("active", "");

        var two3 = document.getElementsByClassName("gen-schedule__link-day-two");
        two3[0].className = two3[0].className.replace("active", "");

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
              <button type="button" className="gen-schedule__link-day-one active" onClick={() => onToggle("one")}>Day 1</button>
            </div>
            <div className="gen-schedule__day-two-container">
              <button className="gen-schedule__link-day-two" onClick={() => onToggle("two")}>Day 2</button>
            </div>
            <div className="genSchedule__day-three-container">
              <button className="gen-schedule__link-day-three" onClick={() => onToggle("three")}>Day 3</button>
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
