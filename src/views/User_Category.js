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

    function setProductID(id){
        localStorage.setItem("productID",id)
        history.push("/user/products/detail")
    }

    // function Page(value){
    //     if(value===-1){
    //         setCurrentPage(currentPage - 1 < 0 ? 0:currentPage - 1)
    //     }
    //     else if(value===4) setCurrentPage(currentPage + 1 > 4 ? 4:currentPage + 1)
    //     else setCurrentPage(value)
    // }

    // const fetchProductList = async (limit) =>{
    //     try {
    //           await axios.get(`https://wnc-be-18.herokuapp.com/products/?skip=${currentPage*5}&limit=${limit}`,{
    //           headers: {"Authorization" : `Bearer ${token}`}
    //         }) 
    //           .then(res => {
    //               setProductList(res.data)
    //               console.log(res.data)
    //           })
    //           .catch(err => console.log(err));
    //     } catch (error) {
    //         console.log('Failed to fetch store list', error)
    //     }
    //   } 

    // const fetchList = (limit,value) =>{
    //     Page(value)
    //     fetchProductList(limit)
    // }

    return(
        <div>
            {/* <!--body--> */}
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                        </div>
                    </div>
                </div>
            </div>
            {/* <!------ featured catergories ------> */}
            <div className="catergories">
                <div className="small-container">
                </div>
            </div>
            {/* <!------ featured auctions ------> */}

            <div className="small-container">
                <div className="row">
                    <h2>All Products</h2>
                    <select>
                        <option>Sort by Name</option>
                        <option>Sort by Category</option>
                        <option>Sort by date (oldest)</option>
                        <option>Sort by date (newest)</option>
                    </select>
                </div>
                <div className="row">
                {ProductList.map(product=>{
                    return(
                        <div className="col-4">
                            <img onClick={()=>setProductID(product._id)} src={product.img}/>
                            <h4>{product.name}</h4>
                            <div className="ammount-box">
                                <div className="ammount-col">
                                    <img src={bidicon}/>
                                </div>
                                <div className="ammount-col">
                                    <p>Current bid - $1300.00</p>
                                </div>
                            </div>
                            <div className="ammount-box">
                                <div className="ammount-col">
                                    <img src={moneybag}/>
                                </div>
                                <div className="ammount-col">
                                    <p>Buy now - $1500.00</p>
                                </div>
                            </div>
                            <t id="timer">  </t>
                        </div>
                    )
                })} 
                {/* <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={(e)=>fetchList(5,-1)} className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                    <li onClick={(e)=>fetchList(5,0)} className="page-item"><Link className="page-link" to="#">0</Link></li>
                    <li onClick={(e)=>fetchList(5,1)} className="page-item"><Link className="page-link" to="#">1</Link></li>
                    <li onClick={(e)=>fetchList(5,2)} className="page-item"><Link className="page-link" to="#">2</Link></li>
                    <li onClick={(e)=>fetchList(5,4)} className="page-item"><Link className="page-link" to="#">Next</Link></li>
                </ul>
                </nav> */}
                </div>
            </div>
        </div>
    )
}

export default UserProductCategory;