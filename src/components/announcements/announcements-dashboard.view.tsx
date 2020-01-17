import React, { useState } from 'react';
import { useAuth0 } from '../../auth/auth';
import Auth0UserType from '../types/Auth0UserType';

const AnnouncementsDashboard: React.FC = () => {
  const authContext = useAuth0()!;
  const { user, getIdTokenClaims } = authContext;
  const authUser: Auth0UserType = user;
  const [announcementConfirmed, setAnnouncementConfirmed] = useState(false);

  console.log(authUser);
  debugger;
  console.log(getIdTokenClaims());

  const authenticatePermissions = token => {
    return true;
  };

  const confirmAnnouncement = event => {
    let token = event.target.elements[1].value;
    authenticatePermissions(token);
    let value = event.target.elements[0].value;
    let isConfirmed = window.confirm(
      `Are you sure you want to push the following announcement?\n${value}`
    );
    setAnnouncementConfirmed(isConfirmed);
    console.log('submitted');
    console.log(event.target.elements[0].value);
  };

  const pushAnnouncement = () => {
    if (announcementConfirmed) {
      return 'pushing announcement';
    }

    return '';
  };

  return (
    <div className="announcement-dashboard-container">
      <form onSubmit={confirmAnnouncement} action={pushAnnouncement()}>
        Announcement Body: <br></br>
        <input type="text" name="announcement-body"></input>
        <br></br>
        Auth Token: <br></br>
        <input type="text" name="announcement-token"></input>
        <br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default AnnouncementsDashboard;
