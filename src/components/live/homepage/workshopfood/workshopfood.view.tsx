import React, {useState } from 'react';
import WorkshopsDayOneView from './workshopschedules/wkdayone.view';
import WorkshopsDayTwoView from './workshopschedules/wkdaytwo.view';
import WorkshopsDayThreeView from './workshopschedules/wkdaythree.view';
import FoodDayOneView from './foodschedules/fooddayone.view';
import FoodDayTwoView from './foodschedules/fooddaytwo.view';
import FoodDayThreeView from './foodschedules/fooddaythree.view';

const WorkshopFoodView: React.FC = () => {
    const [isDayOne, setDayOne] = useState(true);
    const [isDayTwo, setDayTwo] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isDayThree, setDayThree] = useState(false);
    const [isWorkshop, setIsWorkshop] = useState(true);
    const [isFood, setIsFood] = useState(false);
    const [isOn, setIsOn] = useState(false);

    function cleanActives(name: string) {
        while(name.includes("active")){
            name = name.replace("active", "");
        }
        return name; 
    }

    function onToggle(day: String) {
        switch(day){
            case "one":
                var one = document.getElementsByClassName("workshop-and-food__day-button-one");
                if(!one[0].className.includes("active")){
                    one[0].className += " active";
                }

                var two = document.getElementsByClassName("workshop-and-food__day-button-two");
                two[0].className = cleanActives(two[0].className);

                var three = document.getElementsByClassName("workshop-and-food__day-button-three");
                three[0].className = cleanActives(three[0].className);
                
                setDayOne(true);
                setDayTwo(false);
                setDayThree(false);
                console.log(`isFood: ${isFood}`)
                console.log(`isWorkshop: ${isWorkshop}`)

                break;
            case "two":
                var two2 = document.getElementsByClassName("workshop-and-food__day-button-two");
                if(!two2[0].className.includes("active")){
                    two2[0].className += " active";
                }

                var one2 = document.getElementsByClassName("workshop-and-food__day-button-one");
                one2[0].className = cleanActives(one2[0].className);

                var three2 = document.getElementsByClassName("workshop-and-food__day-button-three");
                three2[0].className = cleanActives(three2[0].className);
                
                setDayOne(false);
                setDayTwo(true);
                setDayThree(false);
                console.log(`isFood: ${isFood}`)
                console.log(`isWorkshop: ${isWorkshop}`)

                break;
            case "three":
                var three3 = document.getElementsByClassName("workshop-and-food__day-button-three");
                three3[0].className += " active"

                var one3 = document.getElementsByClassName("workshop-and-food__day-button-one");
                one3[0].className = one3[0].className.replace("active", "");

                var two3 = document.getElementsByClassName("workshop-and-food__day-button-two");
                two3[0].className = two3[0].className.replace("active", "");

                setDayOne(false);
                setDayTwo(false);
                setDayThree(true);
                console.log(`isFood: ${isFood}`)
                console.log(`isWorkshop: ${isWorkshop}`)

                break; 
            case "workshop":
                setIsFood(false);
                setIsWorkshop(true);
                break;
            case "food":
                setIsFood(true);
                setIsWorkshop(false);
                break;
        }
    }

    return(
        <div className="workshop-and-food__container">
            <div className="workshop-and-food__card">
                <div className="workshop-and-food__toggle-buttons">
                    <input
                        checked={isOn}
                        onChange={() => setIsOn(!isOn)}
                        className="workshop-and-food__checkbox"
                        id={`workshop-and-food__new`}
                        type="checkbox"
                    />
                    <label
                        className="workshop-and-food__label"
                        htmlFor={`workshop-and-food__new`}
                    >
                    <span className={`workshop-and-food__button`} />
                    </label>
                </div>
                {/* <div className="workshop-and-food__type-of-info-buttons">
                    <button type="button" className="workshop-and-food__workshop-button" onClick={() => onToggle("workshop")}>workshop</button>
                    <button type="button" className="workshop-and-food__food-button" onClick={() => onToggle("food")}>Food</button>
                </div> */}
                <div className="workshop-and-food__day-button-container">
                    <button className="workshop-and-food__day-button-one active" onClick={() => onToggle("one")}>
                        Day 1
                    </button>
                    <button className="workshop-and-food__day-button-two" onClick={() => onToggle("two")}>
                        Day 2
                    </button>
                    <button className="workshop-and-food__day-button-three" onClick={() => onToggle("three")}>
                        Day 3
                    </button>
                </div>
                <div className="workshop-and-food__information-container">
                    {
                        isWorkshop 
                        ? isDayOne
                            ? <WorkshopsDayOneView/>
                            : isDayTwo 
                                ? <WorkshopsDayTwoView />
                                : <WorkshopsDayThreeView />
                        : isDayOne
                            ? <FoodDayOneView/>
                            : isDayTwo
                            ? <FoodDayTwoView/>
                            : <FoodDayThreeView/>
                    }
                </div>
            </div>
        </div>
    );
};

export default WorkshopFoodView; 