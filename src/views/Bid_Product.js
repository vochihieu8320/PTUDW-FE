import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"



const UserProductBid = () => {
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
        <div className="header">
            <div className="container">
                <div className="row">
                    <h2 className="title" >Bid product</h2>
                </div>
                <div className="row">
                    <div className="pageinfo">
                        <h1 id="product-name">Xe Honda GPX</h1>
                    </div>
                </div>

                <div className="row-product">

                    <div className="col-product">
                        <img src="images/Honda/GPX_1.jpg" width="100%" id="product-img"/>
                        <div className="small-img-row">
                            <div className="small-img-col">
                                <img src="images/Honda/GPX_1.jpg" width="100%" className="small-img"/>
                            </div>
                            <div className="small-img-col">
                                <img src="images/Honda/GPX_2.jpg" width="100%" className="small-img"/>
                            </div>
                            <div className="small-img-col">
                                <img src="images/Honda/GPX_3.jpg" width="100%" className="small-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-5">

                    <div className="pageinfo">
                        <p>Current Price: </p>
                        <p1 id="product-curr">$2500</p1>
                    </div>
                    <div className="pageinfo">
                        <p>Price Step:</p>
                        <p1 id="product-step">$50</p1>
                    </div>
                    <div className="pageinfo">
                        <p>Buy price:</p>
                        <p1 id="product-price">$5000</p1>
                    </div>
                    <div className="pageinfo">
                        <p>Time left:</p>
                        <p1>
                            <t id="timer 6">12/1/2022</t>
                        </p1>
                    </div>
                </div>
            </div>
            <div className="row">
                <table className="t-bid">
                    <thead>
                    <tr>
                        <th className="t-bid-head" colspan="2">For manual bidding:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="t-bid-cell">Your price</td>
                        <td className="t-bid-cell"><input className="input-box" type="text" id="bid-price" placeholder="Type here.."/></td>
                    </tr>
                    <tr>
                        <td className="t-bid-cell"></td>
                        <td className="t-bid-cell"></td>
                    </tr>
                    <tr>
                        <td className="t-bid-cell" colspan="2"><a id="bid-summit" href=""className="btn2">Summit Bid</a></td>
                    </tr>
                    </tbody>
                </table>
                <table className="t-bid">
                    <thead>
                    <tr>
                        <th className="t-bid-head" colspan="2">For Automatic bidding:</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="t-bid-cell">Your max price:</td>
                        <td className="t-bid-cell"><input className="input-box" type="text" id="bid-max-price" placeholder="Type here.."/></td>
                    </tr>
                    <tr>
                        <td className="t-bid-cell">Auto-bid price step</td>
                        <td className="t-bid-cell"><input className="input-box" type="text" id="bid-step" placeholder="Type here.."/></td>
                    </tr>
                    <tr>
                        <td className="t-bid-cell" colspan="2"><a id="bid-auto"   href=""className="btn2">Autobid</a></td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="small-container">
                <div className="pageinfo">
                    <p>Bid History: </p>
                </div>

                <div id="table-wrapper">
                    <div id="table-scroll">
                        <table>
                            <thead>
                            <tr>
                                <th><span className="text">Time</span></th>
                                <th><span className="text">Bidder</span></th>
                                <th><span className="text">Price</span></th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr> <td id="his-time-1">1/11/2022 10:43</td> <td id="his-user-1">abcxyz</td> <td id="his-price-1">$1500</td> </tr>
                                <tr> <td id="his-time-2">1/11/2022 10:43</td> <td id="his-user-2">abcxyz</td> <td id="his-price-2">$1500</td> </tr>
                                <tr> <td id="his-time-3">1/11/2022 10:43</td> <td id="his-user-3">abcxyz</td> <td id="his-price-3">$1500</td> </tr>
                                <tr> <td id="his-time-4">1/11/2022 10:43</td> <td id="his-user-4">abcxyz</td> <td id="his-price-4">$1500</td> </tr>
                                <tr> <td id="his-time-5">1/11/2022 10:43</td> <td id="his-user-5">abcxyz</td> <td id="his-price-5">$1500</td> </tr>
                                <tr> <td id="his-time-6">1/11/2022 10:43</td> <td id="his-user-6">abcxyz</td> <td id="his-price-6">$1500</td> </tr>
                                <tr> <td id="his-time-7">1/11/2022 10:43</td> <td id="his-user-7">abcxyz</td> <td id="his-price-7">$1500</td> </tr>
                                <tr> <td id="his-time-8">1/11/2022 10:43</td> <td id="his-user-8">abcxyz</td> <td id="his-price-8">$1500</td> </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UserProductBid;