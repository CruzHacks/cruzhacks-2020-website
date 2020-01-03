import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/live/logo.svg'
import homeIcon from '../../../assets/live/homeIcon.svg'
import mainSiteIcon from '../../../assets/live/mainSiteIcon.svg'
import mapIcon from '../../../assets/live/mapicon.svg'
import hackPackIcon from '../../../assets/live/hackPackIcon.svg'
import supportIcon from '../../../assets/live/supportIcon.svg'

const Navbar: React.FC = () => {
    return (
        <div className="liveNavbar__container">
                <div className="liveNavbar__logo-container">
                    <img src={logo} alt="Logo" className="liveNavbar__logo"/>
                </div>
                <div className="liveNavbar__homeLink">
                    <NavLink to="/live" className="liveNavbar__link" rel="noopener noreferrer">
                        <img src={homeIcon} alt="Home Icon" className="liveNavbar__link-logos"/> 
                        Home
                    </NavLink>
                </div>
                <div className="liveNavbar__hackPackLink">
                    <NavLink to="/live/hackpack" className="liveNavbar__link" rel="noopener noreferrer">
                        <img src={hackPackIcon} alt="Logo" className="liveNavbar__link-logos"/> 
                        Hack Pack
                    </NavLink>
                </div>
                <div className="liveNavbar__mapLink">
                    <NavLink to="/live/map" className="liveNavbar__link" rel="noopener noreferrer">
                        <img src={mapIcon} alt="Logo" className="liveNavbar__link-logos"/> 
                        Map
                    </NavLink>
                </div>
                <div className="liveNavbar__supportLink">
                    <NavLink to="/live/support" className="liveNavbar__link" rel="noopener noreferrer">
                        <img src={supportIcon} alt="Logo" className="liveNavbar__link-logos"/> 
                        Support
                    </NavLink>
                </div>
                <div className="liveNavbar__mainSiteLink">
                    <NavLink to="/" className="liveNavbar__link" rel="noopener noreferrer">
                        <img src={mainSiteIcon} alt="Logo" className="liveNavbar__link-logos"/> 
                        Main Site
                    </NavLink>
                </div>
        </div>
    );
};

export default Navbar; 