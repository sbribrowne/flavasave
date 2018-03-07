import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
    <footer>
        <ul className="nav navbar-nav navbar-left" id="footerleft">
            <li>
                <a className="footertext" href="#logintext">SIGN IN</a>
            </li>
            <li>
                <a className="footertext innersignuptext">SIGN UP</a>
            </li>
        </ul>
        <p className=" nav navbar-nav navbar-right footertext" id="footercopyright"> © 2018 FLAVASAVE</p>
    </footer>
);

export default Footer;
