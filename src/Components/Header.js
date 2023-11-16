import React from "react";
import {NavLink} from "react-router-dom";
import Logo from "../assets/LOGO.png";


const Header = () => {
    return(
        <header>
        <nav className="header">
            <div className="header__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>    
                <li><NavLink to="/">Accueil</NavLink></li> 
                <li><NavLink to="/about">A propos</NavLink></li>
            </ul>
        </nav>
        </header>
    );
}

export default Header;