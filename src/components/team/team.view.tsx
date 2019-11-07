import React from 'react';

import HeroHeaderView from '../landing/hero/header/hero-header.view';
// import FooterButtonView from '../landing/background/footer/buttons/footer-button.view';
// import FooterTextView from '../landing/background/footer/text/footer-text.view'; // /text/footer-text.view';

const members = [
  { name: 'Jennifer Dutra', title: 'President', imgRef: 'jen-dutra.jpg' },
  {
    name: 'Daniel Segobiano',
    title: 'President',
    imgRef: 'daniel-segobiano.jpg',
  },
  { name: "Kyle O'Brien", title: 'Lead Engineer', imgRef: 'kyle-obrien.jpg' },
  {
    name: 'Sherry Huang',
    title: 'Marketing Director',
    imgRef: 'sherry-huang.jpg',
  },
  { name: "Sean O'Hearn", title: 'Engineer', imgRef: 'sean-ohearn.jpg' },
  { name: 'Eric Mockler', title: 'Engineer', imgRef: 'eric-mockler.jpg' },
  { name: 'Joseph Nguyen', title: 'Engineer', imgRef: 'joseph-nguyen.jpg' },
  { name: 'Isai Lopez Rodas', title: 'Engineer', imgRef: 'isai-rodas.jpg' },
  { name: 'Tiffany Luong', title: 'Engineer', imgRef: 'tiffany-luong.jpg' },
  { name: 'Ivy Chen', title: 'Designer', imgRef: 'ivy-chen.jpg' },
  { name: 'Lily Lee', title: 'Designer', imgRef: 'lily-lee.jpg' },
  {
    name: 'Phoebe Achonwa',
    title: 'Sponsorship',
    imgRef: 'phoebe-achonwa.jpg',
  },
  {
    name: 'Kaitlyn Allen',
    title: 'Sponsorship',
    imgRef: 'kaitlyn-allen.jpg',
  },
  {
    name: 'Disha Mevada',
    title: 'Sponsorship',
    imgRef: 'disha-mevada.jpg',
  },
  {
    name: 'Kelly Fesler',
    title: 'Communications',
    imgRef: 'kelly-fesler.jpg',
  },
  {
    name: 'Navya Rao',
    title: 'Communications',
    imgRef: 'navya-rao.jpg',
  },
  {
    name: 'Radhika Gathwala',
    title: 'Logistics Director',
    imgRef: 'radhika-gathwala.jpg',
  },
  {
    name: 'Neha Pamidi',
    title: 'Logistics & Operations',
    imgRef: 'neha-pamidi.jpg',
  },
  {
    name: 'Krishna Pandian',
    title: 'Logistics & Operations',
    imgRef: 'krishna-pandian.jpg',
  },
  {
    name: 'Sonali Malik',
    title: 'Logistics & Operations',
    imgRef: 'sonali-malik.jpg',
  },
  {
    name: 'Devanshi Thakar',
    title: 'Logistics & Operations',
    imgRef: 'devanshi-thakar.jpg',
  },
];

const memberCards = members.map((t, i) => {
  const imagePath = t.imgRef;
  if (i <= 15) {
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
        <img
          className="team__card-linkedin-icon"
          src={require('../../assets/images/team/linkedIn-icon.svg')}
          alt="linkedIn"
        ></img>
      </div>
    );
  } else if (i > 15 && i < 19) {
    return (
      <div
        key={i}
        className="team__card"
        style={{ position: `relative`, left: `0.1vw` }}
      >
        <img
          className="team__card-image"
          src={require('../../assets/images/team/' + imagePath)}
          width="140"
          height="143"
          alt={t.name}
        ></img>
        <p className="team__card-name-text">{t.name}</p>
        <p className="team__card-title-text">{t.title}</p>
        <img
          className="team__card-linkedin-icon"
          src={require('../../assets/images/team/linkedIn-icon.svg')}
          alt="linkedIn"
        ></img>
      </div>
    );
  } else if (i === 19) {
    return (
      <div
        key={i}
        className="team__card"
        style={{ position: `relative`, left: `-3.5vw`, margin: `1% 1% 1% 10%` }}
      >
        <img
          className="team__card-image"
          src={require('../../assets/images/team/' + imagePath)}
          width="140"
          height="143"
          alt={t.name}
        ></img>
        <p className="team__card-name-text">{t.name}</p>
        <p className="team__card-title-text">{t.title}</p>
        <img
          className="team__card-linkedin-icon"
          src={require('../../assets/images/team/linkedIn-icon.svg')}
          alt="linkedIn"
        ></img>
      </div>
    );
  } else {
    return (
      <div
        key={i}
        className="team__card"
        style={{ position: `relative`, left: `-3.5vw` }}
      >
        <img
          className="team__card-image"
          src={require('../../assets/images/team/' + imagePath)}
          width="140"
          height="143"
          alt={t.name}
        ></img>
        <p className="team__card-name-text">{t.name}</p>
        <p className="team__card-title-text">{t.title}</p>
        <img
          className="team__card-linkedin-icon"
          src={require('../../assets/images/team/linkedIn-icon.svg')}
          alt="linkedIn"
        ></img>
      </div>
    );
  }
});

const TeamView: React.FC = () => {
  return (
    <>
      <div className="team">
        <HeroHeaderView />
        <div className="team__title-area">
          <h1 className="team__heading-text">OUR TEAM</h1>
          <p className="team__sub-heading-text">
            Meet our team of creators, thinkers, strategists, and believers
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
