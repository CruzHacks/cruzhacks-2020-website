import React, { useState } from 'react';
import { postAnnouncement } from '../../account';
import { useAuth0 } from '../../auth/auth';
import Auth0UserType from '../types/Auth0UserType';

const AnnouncementsDashboard: React.FC = () => {
  const authContext = useAuth0()!;
  const { user } = authContext;
  const authUser: Auth0UserType = user;
  const [announcementMessage, setAnnouncementMessage] = useState('');
  const [token, setToken] = useState('');
  const [twilio, setTwilio] = useState(false);

  const handleInputChanges = event => {
    let { name, value } = event.target;
    switch (name) {
      case 'announcement-token':
        setToken(value);
        break;
      case 'announcement-body':
        setAnnouncementMessage(value);
        break;
      case 'twilio-checkbox':
        setTwilio(value);
        break;
    }
  };

  const confirmAnnouncement = event => {
    event.preventDefault();
    let value = event.target.elements[0].value;
    if (
      window.confirm(
        `Are you sure you want to push the following announcement?\n${value}`
      )
    ) {
      pushAnnouncement();
    }
  };

  const pushAnnouncement = () => {
    postAnnouncement(authUser, announcementMessage, token, twilio)
      .then(() => {
        window.alert(
          `pushed announcement successfully: ${announcementMessage}`
        );
      })
      .catch(error => {
        if (error.msg === 'not an organizer') {
          window.alert('you must be an organizer to post announcements');
        }
        if (error.response.status === 401) {
          window.alert('incorrect password');
        }
      });
  };

  return (
    <div className="announcements-dashboard">
      <form onSubmit={confirmAnnouncement} noValidate>
        Announcement Body: <br></br>
        <p>
          <textarea
            className="announcements-dashboard__textarea"
            name="announcement-body"
            onChange={handleInputChanges}
            rows={6}
            cols={90}
          ></textarea>
        </p>
        <br></br>
        Auth Token: <br></br>
        <input
          type="text"
          name="announcement-token"
          onChange={handleInputChanges}
        ></input>
        <br></br>
        Twilio: <br></br>
        <input
          type="checkbox"
          name="twilio-checkbox"
          onChange={handleInputChanges}
        ></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AnnouncementsDashboard;
