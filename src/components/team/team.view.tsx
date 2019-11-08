import React from 'react';

import HeroHeaderView from '../landing/hero/header/hero-header.view';
import MembersJson from '../../assets/data/team/team-members.json';
// import FooterButtonView from '../landing/background/footer/buttons/footer-button.view';
// import FooterTextView from '../landing/background/footer/text/footer-text.view'; // /text/footer-text.view';

const memberCards = MembersJson.map((t, i) => {
  const imagePath = t.imgRef;
  return (
    <div key={i} className="team__card">
      <img
        className="team__card-image"
        src={require('../../assets/images/team/' + imagePath)}
        width="140"
        height="143"
        alt={t.name}
      ></img>
      <p className="team__card-name-text">{t.name}</p>
      <p className="team__card-title-text">{t.title}</p>
      <a rel="noopener noreferrer" target="_blank" href={t.linkedIn}>
        <img
          className="team__card-linkedin-icon"
          src={require('../../assets/images/team/linkedIn-icon.svg')}
          alt="linkedIn"
        ></img>
      </a>
    </div>
  );
});

const TeamView: React.FC = () => {
  return (
    <>
      <div className="team">
        <HeroHeaderView />
        <div className="team__title-area">
          <h1 className="team__heading-text">OUR TEAM</h1>
          <p className="team__sub-heading-text">
            Meet our team of creators, thinkers, strategists, and believers,
          </p>
          <p className="team__sub-heading-text">
            collaborating together to create something amazing.
          </p>
        </div>
        <div className="team__card-container">{memberCards}</div>
      </div>
      {/* <div className="footer-view-container">
        <div className="footer-view-content__container">
          <FooterButtonView />
          <FooterTextView />
        </div>
      </div> */}
    </>
  );
};

export default TeamView;
