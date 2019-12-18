import React from 'react';
import retroImage1 from '../../../assets/images/retrospective/THX_8296.png';
import retroImage2 from '../../../assets/images/retrospective/THX_8336.png';
import retroImage3 from '../../../assets/images/retrospective/THX_9456.png';
import retroImage4 from '../../../assets/images/retrospective/THX_9446.png';
import QuoteView from './quote/quote.view';

const RetrospectiveView: React.FC = () => {
  return (
    <>
      <div className="retrospective__container">
        <img className="retrospective__image-1" alt="" src={retroImage1} />
        <QuoteView
          quote="I'd like to thank CruzHacks 2019 and its mentors for making my first hackathon experience absolutely unreal!"
          attendee="4TH YEAR UNDERGRADUATE"
          school="UC SANTA CRUZ"
        />
        <img className="retrospective__image-2" alt="" src={retroImage2} />
        <img className="retrospective__image-3" alt="" src={retroImage3} />
        <div className="retrospective__secondQuote">
          <QuoteView
            quote="I am officially committing to pursue 
          my first long-term personal project thanks to all of the
          encouragement and positive feedback we got at the event!"
            attendee="2ND YEAR UNDERGRADUATE"
            school="UC IRVINE"
          />
        </div>
        <img className="retrospective__image-4" alt="" src={retroImage4} />
      </div>
    </>
  );
};

export default RetrospectiveView;
