import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import bid from "../assets/res/bid.png"
import Logo from "../assets/res/Logo.jpg"
import menu from "../assets/res/menu.png"
import img1 from "../assets/res/img1.png"

const Header = () => {
    

    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h1>Your next deal is<br/> HERE!</h1>
                        <p>You will never know if your BEST <br/> is lurking right before your EYES, <br/> find it here and now</p>
                        <Link to="/user/login" className="btn">Start Bidding Now! &#8594;</Link>
                    </div>
                    <div className="col-2">
                        <img src={img1}/>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Header;



