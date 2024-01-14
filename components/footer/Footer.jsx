import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {Link} from "react-router-dom"
import { RiAccountCircleLine } from "react-icons/ri";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import  "./style.scss"
const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Developed by Muhammed Bilal</li>
                    {/* <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li> */}
                   
                    
                </ul>
                <div className="infoText">
                    Click below icons to follow me, thanks
                </div>
                <div className="socialIcons">
                     
                   
                    <span className="icon">
                        <Link  className="link-icon" to="https://in.linkedin.com/in/muhammed-bilal-409343218" target="_blank"><FaLinkedin /></Link>
                    </span>
                    <span className="icon">
                       <Link  className="link-icon" to="https://muhammed-bilal777.github.io/my-react-app/" target="_blank"> <RiAccountCircleLine /> </Link>
                    </span>
                    <span className="icon">
                        
                        <Link className="link-icon" to="https://www.instagram.com/muhammed_bilal_07_/"  target="_blank"  ><FaInstagram  /></Link>
                       
                    </span>
                    
                </div>
                <div  className="copy-right">
                    <span>© 2024 Muhammed Bilal</span>
                    </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;