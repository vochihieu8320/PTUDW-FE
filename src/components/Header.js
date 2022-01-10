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

            <script>
                {/* const navbar = document.querySelector(".navbar")
                const menu = document.querySelector(".menu-list");
                const menuBtn = document.querySelector(".menu-btn");
                const cancelBtn = document.querySelector(".cancel-btn");
                const Topbutton = document.getElementById("TopBtn");
                menuBtn.onclick = ()=>{
                    menu.classNameList.add("active")
                    menuBtn.classNameList.add("hide")
                }
                cancelBtn.onclick = ()=>{
                    menu.classNameList.remove("active")
                    menuBtn.classNameList.remove("hide")
                }
                window.onscroll = () => {
                    this.scrollY > 20 ? navbar.classNameList.add("sticky") : navbar.classNameList.remove("sticky")
                    this.scrollY > 100 ? Topbutton.style.display = "block" :Topbutton.style.display = "none";
                }
                function topFunction() {
                    window.scrollTo({
                        top:0,
                        left:0,
                        behavior: "smooth"
                    })
                    document.body.scrollTop = 0;
                } */}
            </script>
        </div>
    </div>
    );
}

export default Header;



