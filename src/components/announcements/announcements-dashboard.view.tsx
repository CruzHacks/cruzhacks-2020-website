import React, { useState } from 'react';
import { postAnnouncement } from '../../account';
import { useAuth0 } from '../../auth/auth';
import Auth0UserType from '../types/Auth0UserType';

const AnnouncementsDashboard: React.FC = () => {
  const authContext = useAuth0()!;
  const { user } = authContext;
  const authUser: Auth0UserType = user;
  const [announcementMessage, setAnnouncementMessage] = useState('');
  const [tokenValid, setTokenValid] = useState(false);

  const ANNOUNCEMENT_TOKEN = process.env.REACT_APP_ANNOUNCEMENT_TOKEN + '';

  const handleInputChanges = event => {
    let { name, value } = event.target;
    if (name === 'announcement-token') {
      setTokenValid(authenticatePermissions(value));
    } else {
      setAnnouncementMessage(value);
    }
  };

  const authenticatePermissions = token => {
    return token === ANNOUNCEMENT_TOKEN;
  };

  const confirmAnnouncement = event => {
    event.preventDefault();

    if (tokenValid) {
      let value = event.target.elements[0].value;
      if (
        window.confirm(
          `Are you sure you want to push the following announcement?\n${value}`
        )
      ) {
        pushAnnouncement();
      }
    } else {
      window.alert(`token invalid, unable to send announcement`);
    }
  };

  const pushAnnouncement = () => {
    if (tokenValid) {
      console.log('pushing announcement');
        postAnnouncement(announcementMessage, authUser)
          .then(() => {
            window.alert(
              `pushed announcement successfully: ${announcementMessage}`
            );
          })
          .catch(error => {
            if (error.msg === 'not an organizer') {
              window.alert('you must be an organizer to post announcements');
            }
          });
    }
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
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AnnouncementsDashboard;
