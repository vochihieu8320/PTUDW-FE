import React, {Fragment, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import user1 from "../assets/res/user-1.png"


const UserProfile = () => {
    

    return(
        <>
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-avatar">
                        <img src="images/user-1.png"/>
                        <Link to=""className="btn2">Change your avatar</Link>
                    </div>
                    <div className="col-5">
                        <div className="pageinfo">
                            <input type="text" className="name-edit" id="user-fullname" value="Nguyễn Văn A"/>
                        </div>
                        <div className="pageinfo">
                            <p>Username: </p>
                            <p1 id="user-name">nvanafbd</p1>
                        </div>
                        <div className="pageinfo">
                            <p>Role:</p>
                            <p1 id="user-role">Bidder</p1>
                        </div>
                        <div className="pageinfo">
                            <p>Phone number:</p>
                            <p1>
                                <p1 id="user-phone">0944146935</p1>
                                <button className="edit"><Fragment>&nbsp;</Fragment>Change</button>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Email:</p>
                            <p1>
                                <p1 id="user-mail">nvA@gmail.com</p1>
                                <button className="edit"><Fragment>&nbsp;</Fragment>Change</button>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>DOB: </p>
                            <p1>
                                <input type="date" className="type" id="user-DOB" value="1990-06-18"/>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Gender:</p>
                            <p1  id="user-gender">
                                <input type="radio" className="radio-gender" name="gender" value="male" checked/> Male
                                <input type="radio" className="radio-gender" name="gender" value="female"/> Female
                                <input type="radio" className="radio-gender" name="gender"  value="other"/> Others
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Rating:</p>
                            <p1  id="user-rating">10/10</p1>
                        </div>
                        <div className="pageinfo">
                            <Link to=""className="btn2 profile">Save</Link>
                            <Link to=""className="btn2 profile">Upgrade to seller</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!------ my auctions ------> */}
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
    </>
    )
}

export default UserProfile;