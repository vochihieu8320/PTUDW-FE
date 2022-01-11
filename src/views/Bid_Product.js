import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"



const UserProductCategory = () => {
    const [ProductList, setProductList] = useState([{"product":{}}]);
    const local = localStorage.getItem("currentUser");
    const token = JSON.parse(local)["token"];
    const [currentPage, setCurrentPage] = useState(0);
    let history = useHistory()

    useEffect(() => {
        const fetchList = async (skip,limit) =>{
            try {
                  await axios.get(`https://wnc-be-18.herokuapp.com/products/?skip=${skip}&limit=${limit}`,{
                  headers: {"Authorization" : `Bearer ${token}`}
                }) 
                  .then(res => {
                      setProductList(res.data)
                      console.log(res.data)
                  })
                  .catch(err => console.log(err));
            } catch (error) {
                console.log('Failed to fetch store list', error)
            }
          } 
        fetchList(0,5);
    }, [])

    

    return(
        <div className="header">
            <div className="container">
                <div className="row">
                    <h2 className="title" >Bid this product</h2>
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
                        <div className="pageinfo">
                            <p>Your price: </p>
                            <p1><input className="input-box" type="text" id="bid-price" placeholder="Type here.."/></p1>
                        </div>
                        <div className="pageinfo">
                            <p>For auto bidding:</p>
                            <p1></p1>
                        </div>
                        <div className="pageinfo">
                            <p>Your max price: </p>
                            <p1><input className="input-box" type="text" id="bid-max-price" placeholder="Type here.."/></p1>
                        </div>
                        <div className="pageinfo">
                            <p>Auto-bid Price step: </p>
                            <p1><input className="input-box" type="text" id="bid-step" placeholder="Type here.."/></p1>
                        </div>
                    </div>
                </div>


                <div className="small-container">
                    <div className="row">
                        <div className="col-6">
                            <Link id="bid-summit" to=""className="btn2">Summit Bid</Link>
                        </div>
                        <div className="col-6">
                            <Link id="bid-auto" to=""className="btn2">Autobid</Link>
                        </div>
                    </div>
                </div>

                <div className="small-container">
                    <div className="pageinfo">
                        <p>Bid History: </p>
                    </div>
                    <textarea readonly className="bid-his" name="bid-history" id="bid-history" cols="30" rows="10"></textarea>
                </div>
            </div>
        </div>

    )
}

export default UserProductCategory;