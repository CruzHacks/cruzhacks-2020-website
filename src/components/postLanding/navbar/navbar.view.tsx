import React from 'react';
import MLHBanner from '../../../assets/postLanding/mlh-banner.svg';

const links = [
    {
        name: "Home",
        link:"/"
    },
    {
        name: "Team", 
        link: "/team"
    },
    {
        name: "2019", 
        link: "https://2019.cruzhacks.com/"
    }
]

const LinkView = () => {
    return(
        <>
        {
            links.map(link => 
                <a href={link.link} className="post-landing-navbar__link" rel="noopener noreferrer" key={link.name}>
                    {link.name}
                </a>
            )
        }
        </>
    )
}

const NavbarView: React.FC = () => {
    return(
        <>
            <div className="post-landing-navbar__container">
                <div className="post-landing-navbar__links-container">
                    <LinkView />
                    <a href="https://mlh.io/" rel="noopener noreferrer" className="post-landing-navbar__link">
                        <img src={MLHBanner} alt="MLH Banner"/>
                    </a>
                </div>
            </div>
        </>
    );
};

export default NavbarView;