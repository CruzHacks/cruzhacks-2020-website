import React from 'react';
import retroImage1 from '../../../assets/images/retrospective/THX_8296.png';
import QuoteView from './quote/quote.view';

const RetrospectiveView: React.FC = () => {
  return (
    <>
      <div className="retrospective__container">
        <img className="retrospective__image 1" src={retroImage1} />
        <QuoteView
          quote="I'm happy to say that I am officially committing to pursue 
          my first long-term personal project thanks to all of the
          encouragement and positive feedback we got at the event!"
          attendee="2ND YEAR UNDERGRADUATE"
          school="UC IRVINE"
        />
      </div>
    </>
  );
};

export default RetrospectiveView;
