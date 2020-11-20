import React from 'react';
import './Footer.css';
import logo from '../../../resources/Illustration/Group 86.png';
import facebook from '../../../resources/Illustration/facebook-logo-in-circular-shape@2x.png';
import twitter from '../../../resources/Illustration/twitter (4)@2x.png';
import linkedin from '../../../resources/Illustration/linkedin (2)@2x.png';
import dribbble from '../../../resources/Illustration/dribbble (1)@2x.png';

const Footer = () => {
    return (
        <footer className="footer-container pt-5 p-5 ">
            <div className="container">
            <div className="row footer-center">
                <div className="col-md-4 col-sm-12 ">
                    <img className="footer-logo" src={logo} alt=""/>
                    <div className="pt-3">
                        <img className="footer-media" src={facebook} alt=""/>
                        <img className="footer-media" src={twitter} alt=""/>
                        <img className="footer-media" src={linkedin} alt=""/>
                        <img className="footer-media" src={dribbble} alt=""/>
                        <img className="footer-media" src={dribbble} alt=""/>
                    </div>
                </div>
                <div className="col-md-2 col-sm-12 p-3">
                    <ul className="list-unstyled">
                        <li> <a className="footer-item" href="#">Features</a></li>
                        <li> <a className="footer-item" href="#">Enterprise</a></li>
                        <li> <a className="footer-item" href="#">Pricing</a></li>
                    </ul>
                </div>
                <div className="col-md-2 col-sm-12 p-3">
                    <ul className="list-unstyled">
                        <li> <a className="footer-item" href="#">Blog</a></li>
                        <li><a className="footer-item" href="#">Help Center</a></li>
                        <li><a className="footer-item" href="#">Contact Us</a></li>
                        <li> <a className="footer-item" href="#">Status</a></li>
                    </ul>  
                </div>
                <div className="col-md-2 col-12 p-3">
                    <ul className="list-unstyled">
                        <li> <a className="footer-item" href="#">About Us</a></li>
                        <li> <a className="footer-item" href="#">Terms of Service</a></li>
                        <li> <a className="footer-item" href="#">Security</a></li>
                        <li> <a className="footer-item" href="#">Login</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </footer>
    );
};

export default Footer;