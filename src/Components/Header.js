import React from "react";
import {Link} from "react-router-dom";
import Logo from "../assets/LOGO.png";
import '../Styles/Header.scss';

const Header = () => {
    return(
        <nav>
            <div className="nav-logo">
                <img src={Logo} alt="Logo" />
            </div>
            <ul>    
                <li><Link to="/">Acceuil</Link></li> 
                <li><Link to="/about">A propos</Link></li>
            </ul>
        </nav>
    );
}

export default Header;