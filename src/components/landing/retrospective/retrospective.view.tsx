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
        <img className="retrospective__image-1" src={retroImage1} />
        <QuoteView
          quote="The idea seemed difficult to accomplish in 36 hours, but luckily we had guidance and inspiration from Cruzhacks' mentors."
          attendee="4TH YEAR UNDERGRADUATE"
          school="UC SANTA CRUZ"
        />
        <span className="retrospective__flexBreak" />
        <img className="retrospective__image-2" src={retroImage2} />
        <span className="retrospective__flexBreak" />
        <img className="retrospective__image-3" src={retroImage3} />
        <span className="retrospective__flexBreak" />
        <div className="retrospective__secondQuote">
          <QuoteView
            quote="I'm happy to say that I am officially committing to pursue 
          my first long-term personal project thanks to all of the
          encouragement and positive feedback we got at the event!"
            attendee="2ND YEAR UNDERGRADUATE"
            school="UC IRVINE"
          />
        </div>
        <img className="retrospective__image-4" src={retroImage4} />
      </div>
    </>
  );
};

export default RetrospectiveView;
