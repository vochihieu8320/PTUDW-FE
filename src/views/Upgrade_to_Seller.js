import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"



const UpgradeToSeller = () => {
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
            {/* <!--header--> */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <h2 className="title">Upgrade to seller</h2>
                    </div>
                </div>
            </div>
            {/* <!--body--> */}
            {/* <!------ my form ------> */}

            <div className="small-container">
                <div className="col-5">
                    <textarea className="desc-box" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
            <div className="row">
                <tr>
                    <td className="t-bid-cell" colspan="4"><a id="bid-auto"   href=""className="btn2">Autobid</a></td>
                </tr>
            </div>
           
        </>
    )
}

export default UpgradeToSeller;