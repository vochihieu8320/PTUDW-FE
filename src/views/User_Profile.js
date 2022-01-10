import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import user1 from "../assets/res/user-1.png"


const UserProfile = () => {
    

    return(
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <img src={user1}/>
                </div>
                <div className="col-5">
                    <h1>Nguyễn Văn A</h1>
                    <p>Username: nvanafbd</p>
                    <p>Role: Bidder</p>
                    <p>DOB: 18/06/1990</p>
                    <p>Email: nvA@gmail.com</p>
                    <p>Gender: Female</p>
                    <p>Rating: 10/10</p>
                    <Link to="/user/updateinfo"className="btn">Edit your information</Link>
                    <Link to="/user/changepwd"className="btn">Change your password</Link>
                </div>
            </div>
            <div className="small-container">
                <div className="row">
                    <div className="col-6">
                        <h2 className="title" >My Auctions</h2>
                    </div>
                    <div className="col-6">
                        <h2 className="title" >Auctions History</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile;