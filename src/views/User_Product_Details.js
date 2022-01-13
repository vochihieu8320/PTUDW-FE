import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import { func } from 'prop-types';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"


const UserProductDetails = () => {
    const [Product, setProduct] = useState([{"product":{}}]);
    const local = localStorage.getItem("currentUser");
    const token = JSON.parse(local)["token"];

    useEffect(() => {
        const fetchProduct = async () =>{
            try {
                  await axios.get(`https://wnc-be-18.herokuapp.com/products/${localStorage.getItem("productID")}`,{
                  headers: {"Authorization" : `Bearer ${token}`}
                }) 
                  .then(res => {
                      setProduct(res.data)
                  })
                  .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
          } 
        fetchProduct();
    }, [])
    
    return(
        <div>
            <div class="header">
            <div className="container">
                <div className="row-product">
                    {Array(Product).map(product=>{
                        return(
                        <>
                            <div className="col-product">
                            <img src={product.img} width="100%" id="product-img"/>
                            <div className="small-img-row">
                                <div className="small-img-col">
                                    <img src={product.img} width="100%" className="small-img"/>
                                </div>
                                <div className="small-img-col">
                                    <img src={product.img1} width="100%" className="small-img"/>
                                </div>
                                <div className="small-img-col">
                                    <img src={product.img2} width="100%" className="small-img"/>
                                </div>
                            </div>
                                    
                            </div>
                            <div className="col-5">
                                <div className="pageinfo">
                                    <h1 id="product-name">{product.name}</h1>
                                </div>
                                <div className="pageinfo">
                                    <p>Current Price: </p>
                                    <p1 id="product-curr">${product.current_price}</p1>
                                </div>
                                <div className="pageinfo">
                                    <p>Price Step:</p>
                                    <p1 id="product-step">${product.price_step}</p1>
                                </div>
                                <div className="pageinfo">
                                    <p>Buy now:</p>
                                    <p1 id="product-price">${product.buynow_price}</p1>
                                </div>
                                <div className="pageinfo">
                                    <p>Seller:</p>
                                    <p1>
                                        <p1 id="seller-name">****nvana </p1>
                                        <p1 id="seller-rating">(10/10)</p1>
                                    </p1>
                                </div>
                                <div className="pageinfo">
                                    <p>Last Bidder: </p>
                                    <p1>
                                        <p1 id="bidder-name">****vtlong </p1>
                                        <p1 id="bidder-rating">(10/10)        </p1>
                                        <p1><Fragment>&nbsp;</Fragment>at:<Fragment>&nbsp;</Fragment>
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
                                    <p1 id="product-desc">{product.description}</p1>
                                </div>
                            </div>
                        </>
                        )
                    })}
                    
                </div>
            </div>
            </div>
            
            <div className="small-container">
                <div className="row">
                    <div className="col-6">
                        <Link to=""className="btn2">Bid Now!</Link>
                        <p1>
                            <img className="iconimg" src={bidicon}/>
                            <p1 id="activebidder">203</p1>
                            <p1>Active bidder</p1>
                        </p1>
                    </div>
                    <div className="col-6">
                        <a href=""className="btn2">Add to watch list</a>
                        <p1>
                            <img className="iconimg" src="images/watching.png"/>
                            <p1 id="watching">203</p1>
                            <p1>People Watching</p1>
                        </p1>
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