/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import { getAnnoucements } from '../../../../account';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { useInterval, getDateToString, getTimeToString } from './helperFunctions/functions';

interface Post {
  announcement: string;
  datetime: string;
}

const UpdatesView: React.FC = () => {

  var posts: any; 
  const [postArray, setPostArray] = useState<Post[]>([]);
  const [tempArray, setTempArray] = useState<Post[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [isEqual, setIsEqual] = useState(false);

  useInterval(function() {
    getAnnoucements()
      .then(response => {
        posts = response;
        if(posts.length !== tempArray.length){
          setTempArray(posts.reverse());
          setIsEqual(false);
        }
      })
      .catch(err => {
        console.log(err)
      });
  }, isMounted ? 10000 : null);

  useEffect(() => {
    if(!isMounted){
      setIsMounted(isMounted => !isMounted);
    }
    getAnnoucements()
      .then(response => {
        if(!isEqual){
          posts = response; 
          posts = posts.reverse();
          setPostArray(posts);
        }
      })
      .catch(err => {
        console.log(err)
      });

      return function cleanup() {
        setIsMounted(true);
        setIsEqual(false);
      }
  }, [tempArray])

  const Updates = () => {
    return(
      <div className="updates-card__updates-container">
        <PerfectScrollbar className="updates-card__scrollbar">
          {
            postArray.map((post, i) => (
              <div className="updates-card__announcement" key={i}>
                <span className="updates-card__post-time">{getTimeToString(post)}</span>
                <span className="updates-card__post-info">{post.announcement}</span>
                <span className="updates-card__post-date">{getDateToString(post)}</span>
                {i === postArray.length-1 ? <div className="updates-card__end-line-break"></div>:<div className="updates-card__line-break"></div>}
              </div>
            ))
          }
        </PerfectScrollbar>
        
      </div>
    );
  }

  return (
    <>
      <div className="updates-card__container">
        <div className="updates-card__card">
          <div className="updates-card__title-container">
            <span className="updates-card__blinker"></span>
            <span className="updates-card__title">Live Updates</span>
          </div>
          {<Updates /> }
        </div>
      </div>
    </>
  );
};

export default UpdatesView;
