import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";


const UserProductDetails = () => {
    

    return(
        <div>
            <div className="container">
                <div className="row">
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
                    <div className="col-5">
                        <div className="pageinfo">
                            <h1 id="product-name">Xe Honda GPX</h1>
                        </div>
                        <div className="pageinfo">
                            <p>Current Price: </p>
                            <p1 id="product-curr">$2500</p1>
                        </div>
                        <div className="pageinfo">
                            <p>Price Step:</p>
                            <p1 id="product-step">$50</p1>
                        </div>
                        <div className="pageinfo">
                            <p>Buy now:</p>
                            <p1 id="product-price">$5000</p1>
                        </div>
                        <div className="pageinfo">
                            <p>Seller:</p>
                            <p1>
                                <p1 id="seller-name">nvanafbd</p1>
                                <p1 id="seller-rating">(10/10)</p1>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Last Bidder: </p>
                            <p1>
                                <p1 id="bidder-name">abcLong</p1>
                                <p1 id="bidder-rating">(10/10)</p1>
                                <p1>at:
                                        <t id="timer5">10/1/2022</t>
                                </p1>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Time left:</p>
                            <p1>
                                <t id="timer 6">12/1/2022</t>
                            </p1>
                        </div>
                        <div className="pageinfo">
                            <p>Description:</p>
                            <p1 id="product-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores culpa dolorem doloremque eligendi expedita hic illo itaque molestias natus odit officiis pariatur quia sunt, tempora, ullam ut voluptas voluptatum.</p1>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!------ auctions ------> */}

            <div className="small-container">
                <div className="row">
                    <div className="col-6">
                        <Link to=""className="btn2">Bid Now!</Link>
                    </div>
                    <div className="col-6">
                        <Link to=""className="btn2">Add to watch list</Link>
                    </div>
                </div>
            </div>

            {/* <!------ Similar auctions ------> */}

            <div className="small-container">
                <h2 className="title" >Similar Auctions</h2>
                <div className="row">
                    <div className="col-4">
                        <img src="images/triumph1.jpg"/>
                        <h4>WnR Triumph Cafe Racer</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/bidicon.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $1300.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/moneybag.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $1500.00</p>
                            </div>
                        </div>
                        <t id="timer">  </t>
                    </div>
                    <div className="col-4">
                        <img src="images/triumph2.jpg"/>
                        <h4>Back Triumph Cafe Racer</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/bidicon.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $1300.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/moneybag.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $2000.00</p>
                            </div>
                        </div>
                        <t id="timer2">  </t>
                    </div>
                    <div className="col-4">
                        <img src="images/shoe1.jpg"/>
                        <h4>Red Shoes</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/bidicon.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $100.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/moneybag.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $200.00</p>
                            </div>
                        </div>
                        <t id="timer3">  </t>
                    </div>
                    <div className="col-4">
                        <img src="images/shoe2.jpg"/>
                        <h4>White Adidas Runner</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/bidicon.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $250.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/moneybag.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $300.00</p>
                            </div>
                        </div>
                        <t id="timer4">  </t>
                    </div>

                    <div className="col-4">
                        <img src="images/triumph1.jpg"/>
                        <h4>WnR Triumph Cafe Racer</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/bidicon.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $1300.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src="images/moneybag.png"/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $1500.00</p>
                            </div>
                        </div>
                        <t id="timer">  </t>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProductDetails;