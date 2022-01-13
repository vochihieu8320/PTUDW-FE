import React, {Fragment,useEffect, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import axios from 'axios';
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"



const UserSearchProduct = () => {
    const [ProductList, setProductList] = useState([{"product":{}}]);
    const local = localStorage.getItem("currentUser");
    const token = JSON.parse(local)["token"];
    const [sortBy, setSortBy] = useState("");
    let history = useHistory()

    useEffect(() => {
        const fetchList = async (skip,limit) =>{
            try {
                  await axios.get(`https://wnc-be-18.herokuapp.com/products/?skip=${skip}&limit=${limit}&name=${localStorage.getItem("current_search_name")}&category=${localStorage.getItem("current_search_name")}&sortBy=${sortBy}`,{
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
        fetchList(0,10);
    }, [])

    function setProductID(id){
        localStorage.setItem("productID",id)
        history.push("/user/products/detail")
    }

    function sortProduct(){
        window.location.reload()
    }

    return(
        <div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <h2 className="title">Search Result</h2>
                        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
                            <option selected>Sort By</option> 
                            <option value={1}>price</option>
                            <option value={2}>date</option>
                        </select>
                        <button type='submit' onClick={()=>sortProduct()} >Sort</button>
                    </div>
                </div>
            </div>
            <div className="small-container">
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
                </div>
            </div>
        </div>
    )
}

export default UserSearchProduct;