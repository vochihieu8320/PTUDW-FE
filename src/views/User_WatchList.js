import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"



const UserWatchList = () => {
    // const [ProductList, setProductList] = useState([{"product":{}}]);
    // const local = localStorage.getItem("currentUser");
    // const token = JSON.parse(local)["token"];
    // const [currentPage, setCurrentPage] = useState(0);
    // let history = useHistory()

    // useEffect(() => {
    //     const fetchList = async (skip,limit) =>{
    //         try {
    //               await axios.get(`https://wnc-be-18.herokuapp.com/products/?skip=${skip}&limit=${limit}`,{
    //               headers: {"Authorization" : `Bearer ${token}`}
    //             }) 
    //               .then(res => {
    //                   setProductList(res.data)
    //                   console.log(res.data)
    //               })
    //               .catch(err => console.log(err));
    //         } catch (error) {
    //             console.log('Failed to fetch store list', error)
    //         }
    //       } 
    //     fetchList(0,5);
    // }, [])

    

    return(
        <>
    <div className="container">
      <div className="row">
        <h2 className="title" >Your Watchlist</h2>
      </div>
    </div>
    {/* <!--watchlist--> */}
    <div className="container">
        <div className="row-watch">
        <img className="img-watchlist" src="images/Honda/GPX_2.jpg"/>
        <div className="col-watchbig">
            <div className="row-small">
                <p1>From:</p1>
                <p1 id="seller-name">****nvana</p1>
                <p1 id="seller-rating">(10/10)</p1>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <div className="col-watch">
                <h1 id="product-name1">Xe Honda GPX</h1>
                </div>
            </div>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <p>Time left:</p>
                <p1> <t id="timer 6"></t> </p1>
            </div>
            </div>
        </div>
        <div className="col-watchbig">
            <div className="row-small">
            <p1>Last bid:</p1>
            <p1 id="bidder-name">****nvana</p1>
            <p1 id="bidder-price">$1500</p1>
            </div>
            <div className="row-small">
            <p1>Your bid:</p1>
            <p1 id="user-price">$1400</p1>
            </div>
        </div>
        <div className="col-icon">
            <div className="row-small">
            <div className="icon-watch watch-canbtn">
                <i className="fas fa-times"></i>
            </div>
            </div>
        </div>
        </div>

        <div className="row-watch">
        <img className="img-watchlist" src="images/Honda/X-ADV_1.jpg"/>
        <div className="col-watchbig">
            <div className="row-small">
            <p1>From:</p1>
            <p1 id="seller-name">****nvana</p1>
            <p1 id="seller-rating">(10/10)</p1>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <div className="col-watch">
                <h1 id="product-name2">Xe X-ADV</h1>
                </div>
            </div>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <p>Time left:</p>
                <p1> <t id="timer 6"></t> </p1>
            </div>
            </div>
        </div>
        <div className="col-watchbig">
            <div className="row-small">
            <p1>Last bid:</p1>
            <p1 id="bidder-name">****nvana</p1>
            <p1 id="bidder-price">$1500</p1>
            </div>
            <div className="row-small">
            <p1>Your bid:</p1>
            <p1 id="user-price">$1400</p1>
            </div>
        </div>
        <div className="col-icon">
            <div className="row-small">
            <div className="icon-watch watch-canbtn">
                <i className="fas fa-times"></i>
            </div>
            </div>
        </div>
        </div>

        <div className="row-watch">
        <img className="img-watchlist" src="images/Honda/Honda-CB300R_1.jpeg"/>
        <div className="col-watchbig">
            <div className="row-small">
            <p1>From:</p1>
            <p1 id="seller-name">****nvana</p1>
            <p1 id="seller-rating">(10/10)</p1>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <div className="col-watch">
                <h1 id="product-name3">Xe Honda CB300R</h1>
                </div>
            </div>
            </div>
            <div className="row-small">
            <div className="pageinfo">
                <p>Time left:</p>
                <p1> <t id="timer 6"></t> </p1>
            </div>
            </div>
        </div>
        <div className="col-watchbig">
            <div className="row-small">
            <p1>Last bid:</p1>
            <p1 id="bidder-name">****nvana</p1>
            <p1 id="bidder-price">$1500</p1>
            </div>
            <div className="row-small">
            <p1>Your bid:</p1>
            <p1 id="user-price">$1400</p1>
            </div>
        </div>
        <div className="col-icon">
            <div className="row-small">
            <div className="icon-watch watch-canbtn">
                <i className="fas fa-times"></i>
            </div>
            </div>
        </div>
        </div>
    </div>
    </>
    )
}

export default UserWatchList;