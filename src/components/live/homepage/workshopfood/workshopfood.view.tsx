import React, { useState } from 'react';
import WorkshopsDayOneView from './workshopschedules/wkdayone.view';
import WorkshopsDayTwoView from './workshopschedules/wkdaytwo.view';
import WorkshopsDayThreeView from './workshopschedules/wkdaythree.view';
import FoodDayOneView from './foodschedules/fooddayone.view';
import FoodDayTwoView from './foodschedules/fooddaytwo.view';
import FoodDayThreeView from './foodschedules/fooddaythree.view';

const WorkshopFoodView: React.FC = () => {
  const [isDayOne, setDayOne] = useState(true);
  const [isDayTwo, setDayTwo] = useState(false);
  const [isDayThree, setDayThree] = useState(false);
  const [isToggleActive, setToggleActive] = useState(false);

  function onToggle(day: String) {
    switch (day) {
      case 'one':
        setDayOne(true);
        setDayTwo(false);
        setDayThree(false);

        break;
      case 'two':
        setDayOne(false);
        setDayTwo(true);
        setDayThree(false);

        break;
      case 'three':
        setDayOne(false);
        setDayTwo(false);
        setDayThree(true);

        break;
    }
  }

  const classNameForToggle = `workshop-and-food__toggle-component ${
    isToggleActive ? 'active' : ''
  }`;

  return (
    <div className="workshop-and-food__container">
      <div className="workshop-and-food__card">
        <div className="workshop-and-food__toggle-buttons-container">
          <div
            className={classNameForToggle}
            onClick={() => setToggleActive(!isToggleActive)}
          >
            <div className="workshop-and-food__toggle-button">
              <span className="workshop-and-food__toggle-text">
                {isToggleActive ? 'Food' : 'Workshop'}
              </span>
            </div>
            {isToggleActive ? (
              <span className="workshop-and-food__workshop-toggle">
                Workshop
              </span>
            ) : (
              <span className="workshop-and-food__food-toggle">Food</span>
            )}
          </div>
        </div>
        <div className="workshop-and-food__day-button-container">
          <div className="workshop-and-food__day-one-container">
            <button
              className={`workshop-and-food__day-button-one ${
                isDayOne ? 'active' : ''
              }`}
              onClick={() => onToggle('one')}
            >
              Day 1
            </button>
          </div>
          <div className="workshop-and-food__day-two-container">
            <button
              className={`workshop-and-food__day-button-two ${
                isDayTwo ? 'active' : ''
              }`}
              onClick={() => onToggle('two')}
            >
              Day 2
            </button>
          </div>
          <div className="workshop-and-food__day-three-container">
            <button
              className={`workshop-and-food__day-button-three ${
                isDayThree ? 'active' : ''
              }`}
              onClick={() => onToggle('three')}
            >
              Day 3
            </button>
          </div>
        </div>
        <div className="workshop-and-food__information-container">
          {isToggleActive ? (
            isDayOne ? (
              <FoodDayOneView />
            ) : isDayTwo ? (
              <FoodDayTwoView />
            ) : (
              <FoodDayThreeView />
            )
          ) : isDayOne ? (
            <WorkshopsDayOneView />
          ) : isDayTwo ? (
            <WorkshopsDayTwoView />
          ) : (
            <WorkshopsDayThreeView />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkshopFoodView;
