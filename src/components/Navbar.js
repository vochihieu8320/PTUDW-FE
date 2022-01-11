import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";

const Navbar = () => {
    let history = useHistory()
    function RemoveAccount(){
        localStorage.removeItem("currentUser")
        localStorage.removeItem("refreshToken")
        history.push("/user/login")
    }

    return (
        <nav className="navbar">
            <div className="content">
                <div className="logo"><Link to="/user"> ForBidDen</Link></div>
                <div class="box">
                <input type="checkbox" id="check" />
                    <div class="search-box">
                        <input id="s-box" type="text" placeholder="Search for a bid"/>
                        <label for="check" class="s-icon">
                            <i class="fas fa-search"></i>
                        </label>
                    </div>
                </div>
                <ul className="menu-list">
                    <div className="icon cancel-btn">
                        <i className="fas fa-times"></i>
                    </div>
                    <li><Link to="/user">Home</Link></li>
                    <li><Link to="/user/contact">Contact</Link></li>
                    <li><Link to="/user/products">Category</Link>
                        <ul>
                            <li><Link to="#">Điện tử
                                <span className="fa fa-plus"></span>
                            </Link>
                                <ul>
                                    <li><Link to="#">Máy tính xách tay</Link></li>
                                    <li><Link to="#">Điện thoại di động</Link></li>
                                </ul>
                            </li>
                            <li><Link to="#">Phương tiện</Link>
                                <span className="fa fa-plus"></span>
                                <ul>
                                    <li><Link to="#">Ô tô</Link></li>
                                    <li><Link to="#">Xe máy</Link></li>
                                </ul>
                            </li>
                            {/* <li><Link to="#">Trang phục</Link>
                                <span className="fa fa-plus"></span>
                                <ul>
                                    <li><Link to="#">Giày dép</Link></li>
                                    <li><Link to="#">Quần áo</Link></li>
                                </ul>
                            </li> */}
                        </ul>
                    </li>
                    <li><Link>Account</Link>
                        <ul>
                            <li><Link to="/user/profile">My Account</Link></li>
                            <li><Link to="#">My Bids</Link></li>
                            <li><Link onClick={()=>RemoveAccount()}>Logout</Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="icon menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
    </nav>
    );
}

export default Navbar;
