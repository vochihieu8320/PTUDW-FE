import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import logowhite from "../assets/res/logo-white.png"
import playstore from "../assets/res/play-store.png"
import appstore from "../assets/res/app-store.png"

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download app</h3>
                        <p>Donwload our app for Android and Ios</p>
                        <div className="app-logo">
                            <img src={playstore} alt=""/>
                            <img src={appstore} alt=""/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={logowhite} alt=""/>
                        <p>ForBidDen - For True Bidders!</p>
                    </div>
                    <div className="footer-col-3">
                        <h3>External Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Bidding Policy</li>
                            <li>Join Us</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className="copyright">Copyrights 2021 - HCMUS</p>
        </div>
    );
}

export default Footer;






