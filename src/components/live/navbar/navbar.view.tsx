import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/live/navbar/logo.svg'
import homeIcon from '../../../assets/live/navbar/homeIcon.svg'
import mainSiteIcon from '../../../assets/live/navbar/mainSiteIcon.svg'
import mapIcon from '../../../assets/live/navbar/mapicon.svg'
import hackPackIcon from '../../../assets/live/navbar/hackPackIcon.svg'
import supportIcon from '../../../assets/live/navbar/supportIcon.svg'

const Links = [
    {
        name: "Home", 
        class: "home",
        link: "/live", 
        icon: homeIcon
    }, 
    {
        name: "Hack Pack", 
        class: "hackPack",
        link: "/live/hackpack", 
        icon: hackPackIcon
    }, 
    {
        name: "Map", 
        class: "map",
        link: "/live/map", 
        icon: mapIcon
    },
    {
        name: "Support",
        class: "support",
        link: "/live/support", 
        icon: supportIcon
    },
    {
        name: "Main Site",
        class: "mainSite",
        link: "/", 
        icon: mainSiteIcon
    }
]

const Navbar: React.FC = () => {
    return (
        <div className="liveNavbar__container">
                <div className="liveNavbar__logo-container">
                    <img src={logo} alt="Logo" className="liveNavbar__logo"/>
                </div>
                {Links.map(item => (
                    <div className={`liveNavbar__${item.class}Link`} key={item.name}>
                        <NavLink to={item.link} className="liveNavbar__link" rel="noopener noreferrer">
                            <img src={item.icon} alt={`${item.name} Icon`} className="liveNavbar__link-logos"/>
                            {item.name}
                        </NavLink>  
                    </div>
                ))}
        </div>
    );
};

export default Navbar; 