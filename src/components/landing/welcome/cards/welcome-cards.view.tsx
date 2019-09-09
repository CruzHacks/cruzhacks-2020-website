import React from 'react';

import welcomeCardBg from '../../../../assets/images/welcome/Welcome-Cards.svg';
import welcomeCardTree from '../../../../assets/images/welcome/Welcome_Tree.svg';

const template = [
    {
        "title": "INCLUSIVITY",
        "text": "Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community."
    },
    {
        "title": "INNOVATION",
        "text": "Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community."
    },
    {
        "title": "AGENCY",
        "text": "Put your thinking cap on and \nbrainstorm an innovative idea \nthat delivers a positive \neffect on your community."
    }
];

const welcomeCards = template.map((t, i) => {
    return (
        <div key={i} className="welcome-card">

            <img className="welcome-card__bg" src={welcomeCardBg} alt=""/>
            <div className="welcome-card__text">
                <div className="welcome-card__header">{t.title}</div>
                <img className="welcome-card__tree" src={welcomeCardTree} alt=""/>
                <div className="welcome-card__caption">{t.text}</div>
            </div>
        </div>
    );
});

const WelcomeCardRowView: React.FC = () => {
    return (
        <div className="welcome-cards__container">
            {welcomeCards}
        </div>
    );
};

export default WelcomeCardRowView;