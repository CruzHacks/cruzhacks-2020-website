import React from 'react';
import question from '../../../../assets/live/homepage/question.svg';

const QuestionView: React.FC = () => {
  return (
    <div className="questions__card-container">
      <div className="questions__card">
        <span className="questions__title">Have a Question?</span>
        <img src={question} className="questions__image" alt="question"></img>
        <span className="questions__paragraph">
          Our organizing team is available throughout the whole event. If
          there’s anything you need please contact us through slack or find an
          organizer in person.
        </span>
        <div className="questions__button-container">
          <a
            className="questions__join-slack"
            href="https://join.slack.com/t/cruzhacks-attendees20/shared_invite/enQtODg4NDcyNjE0ODQ5LWZhODhjNzQ3MDVmYmE1ZWYxMGIzZjNiMzZiZTJkNzcwNmE5NDQxNWFjZGJhMmYzM2RkMjk0MDhkNjU4N2ZmZTg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Our Slack
          </a>
          <a
            className="questions__goto-hackpack"
            href="/live/hackpack"
            rel="noopener noreferrer"
          >
            Go To Hack Pack
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuestionView;
