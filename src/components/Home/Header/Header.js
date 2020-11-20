import React from 'react';
import './Header.css'
import logo from '../../../resources/Illustration/Group 86.png'

const Header = () => {
    return (
        <section id="header" className="head-navbar">
            <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
                <a class="navbar-brand" href="#"><img src={logo} style={{height:"70px", width: "100px"}} alt=""/></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#header">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about-us">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#team">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#achievements">Our Team</a>
                    </li>
                    </ul>
                    
                    <form class="form-inline my-2 my-lg-0">
                        <button className="btn-main">Contact Us</button>
                    </form>
                </div>
            </nav>
            </div>
        </section>
    );
};

export default Header;