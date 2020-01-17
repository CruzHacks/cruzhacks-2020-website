import React from 'react';

const EventInfoCardView: React.FC = () => {
  return (
    <div className="event-info__container">
      <div className="event-info__card">
        <span className="event-info__small-txt">Need Something?</span>
        <span className="event-info__title">Event Info</span>
        <div className="event-info__wifi-section">
          <span className="event-info__wifi-title">WiFi</span>
          <span className="event-info__wifi-user">User: CruzHacks2020</span>
          <span className="event-info__wifi-pass">Pass: slughack3r</span>
        </div>
        <div className="event-info__color-legend">
          <span className="event-info__legend-title">Color Legend</span>
          <br />
          <span className="event-info__legend-mentors">Organizers:</span>
          <ul>
            <li className="event-info__legend-org-li">Green Shirt</li>
            <li className="event-info__legend-org-li">Green Jackets</li>
          </ul>
          <span className="event-info__legend-mentors">
            Mentors/Volunteers:
          </span>
          <ul>
            <li className="event-info__legend-mentors-li">Blue Shirt</li>
          </ul>
          <span className="event-info__legend-mentors">Judges:</span>
          <ul>
            <li className="event-info__legend-judges-li">Pink Shirt</li>
          </ul>
        </div>
        <div className="event-info__slack">
          <span className="event-info__slack-title">Slack</span>
          <span className="event-info__slack-info">
            Slack will be used for communication during the event. Join our
            Slack
            <a
              className="event-info__slack-link"
              href="https://join.slack.com/t/cruzhacks-attendees20/shared_invite/enQtODg4NDcyNjE0ODQ5LWZhODhjNzQ3MDVmYmE1ZWYxMGIzZjNiMzZiZTJkNzcwNmE5NDQxNWFjZGJhMmYzM2RkMjk0MDhkNjU4N2ZmZTg"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              here
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventInfoCardView;
