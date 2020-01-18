import {useEffect, useRef} from 'react';

export function getTimeToString(post) {
    var date = new Date(post.announcedatetime);
    var hours = date.getHours()
    var minutes = date.getMinutes(); 
    var isAm = true; 
    hours > 12 ? isAm = false : isAm = true; 
    isAm ? hours = hours - 0 : hours = hours - 12; 

    return `${hours}:${minutes} ${isAm ? 'AM':'PM'}`;
}

export function getDateToString(post) {
    var date = new Date(post.announcedatetime);
    var weekday = date.getDay(); 
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();
    var weekdayString = getWeekday(weekday);

    return `${weekdayString}, ${month+1}/${day}/${year}`;
}

function getWeekday(weekday){
    switch(weekday) {
      case 0:
        return "Sun";
      case 1: 
        return "Mon";
      case 2:
        return "Tues";
      case 3: 
        return "Wed";
      case 4:
        return "Thur";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
}

export function useInterval(callback, delay) {
    const savedCallback = useRef(callback);
  
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}