import React from 'react';
import openQuote from '../../../../assets/images/retrospective/openQuote.svg';
import closeQuote from '../../../../assets/images/retrospective/closeQuote.svg';
import emDash from '../../../../assets/images/retrospective/emDash.svg';

interface quotes {
  quote: string;
  attendee: string;
  school: string;
}

const QuoteView: React.FC<quotes> = quotes => {
  return (
    <>
      <div className="retrospective__quote-container">
        <img className="retrospective__quote-open" src={openQuote} />
        <span className="retrospective__quote-text">
          <span className="retrospective__quoteMobile">"</span>
          {quotes.quote}
          <span className="retrospective__quoteMobile">"</span>
        </span>
        <img className="retrospective__quote-emDash" src={emDash} />
        <div className="retrospective__quote-credit-container">
          <span className="retrospective__quote-credit-text">
            {quotes.attendee}
          </span>
          <span className="retrospective__quote-credit-text">
            {quotes.school}
          </span>
        </div>
        <img className="retrospective__quote-close" src={closeQuote} />
      </div>
    </>
  );
};

export default QuoteView;
