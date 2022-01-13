import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../assets/css/homepage.css";
import cat1 from "../assets/res/cat1.jpg"
import cat2 from "../assets/res/cat2.jpg"
import cat3 from "../assets/res/cat3.jpg"
import triumph1 from "../assets/res/triumph1.jpg"
import triumph2 from "../assets/res/triumph2.jpg"
import shoe1 from "../assets/res/shoe1.jpg"
import shoe2 from "../assets/res/shoe2.jpg"
import moneybag from "../assets/res/moneybag.png"
import bidicon from "../assets/res/bidicon.png"

const Homepage = () => {

    // function Countdown (downtime,id) {
    //     var countDownDate = new Date(downtime).getTime();
    //     var x = setInterval(()=> {
    //         var now = new Date().getTime();
    //         var distance = countDownDate - now;
    //         var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //         document.getElementById("timer").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";
    //         if (distance < 0) {
    //             clearInterval(x);
    //             document.getElementById(id).innerHTML = "EXPIRED";
    //         }
    //     }, 1000);
    // }

    return(
        <div>
            <button  id="TopBtn" title="Go to top">
                <i className="material-icons">arrow_upward</i>
            </button> 

            {/* <!------ featured catergories ------> */}
            <div className="catergories">
                <div className="small-container">

                    <h2 className="title" >Featured Categories</h2>
                    <div className="row">
                        <div className="col-3">
                            <img src={cat1} alt=""/>
                            <h4>CARS</h4>
                        </div>
                        <div className="col-3">
                            <img src={cat2} alt=""/>
                            <h4>BIKES</h4>
                        </div>
                        <div className="col-3">
                            <img src={cat3} alt=""/>
                            <h4>ACCESSORIES</h4>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!------ featured auctions ------> */}

            <div className="small-container">
                <h2 className="title" >Featured Auctions</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={triumph1} alt=""/>
                        <h4>WnR Triumph Cafe Racer</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $1300.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $1500.00</p>
                            </div>
                        </div>
                        <t id="timer1">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={triumph2} alt=""/>
                        <h4>Back Triumph Cafe Racer</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $1300.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $2000.00</p>
                            </div>
                        </div>
                        <t id="timer2">  </t>
                    </div>
                    <div className="col-4">
                        <img src={shoe1} alt=""/>
                        <h4>Red Shoes</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $100.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $200.00</p>
                            </div>  
                        </div>
                        <t id="timer3">  </t>
                    </div>
                    <div className="col-4">
                        <img src={shoe2} alt=""/>
                        <h4>White Adidas Runner</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $250.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag} alt=""/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $300.00</p>
                            </div>
                        </div>
                        <t id="timer4">  </t>

                    </div>
                </div>
            </div>

            {/* <!------ offer ------>
            {/* <div className="offer">
                <div className="small-container">
                    <div className="row">
                        <div className="col-2">
                            <img src={exclusive} alt="" className="offer-img"/>
                        </div>
                        <div className="col-2">
                            <p>Start bidding now to have a chance to win this watch!</p>
                            <h1>Smart Band 4</h1>
                            <Link to="/register"className="btn">Register now! &#8594;</Link>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!------ hot auctions ------> */}

            <div className="small-container">
                <h2 className="title" >Hottest Auctions</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={triumph1}/>
                        <h4>WnR Triumph Cafe Racer</h4>
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
                        <t id="timer5">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={triumph2}/>
                        <h4>Back Triumph Cafe Racer</h4>
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
                                <p>Buy now - $2000.00</p>
                            </div>
                        </div>
                        <t id="timer6">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={shoe1}/>
                        <h4>Red Shoes</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon}/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $100.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag}/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $200.00</p>
                            </div>
                        </div>
                        <t id="timer7">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={shoe2}/>
                        <h4>White Adidas Runner</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon}/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $250.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag}/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $300.00</p>
                            </div>
                        </div>
                        <t id="timer8">  </t>
                        
                    </div>

                    <div className="col-4">
                        <img src={triumph1}/>
                        <h4>WnR Triumph Cafe Racer</h4>
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
                        <t id="timer9">  </t>
                        
                    </div>
    
                </div>
            </div>
            {/* <!------ most expensive auctions ------> */}

            <div className="small-container">
                <h2 className="title" >Most Expensive Auctions</h2>
                <div className="row">
                    <div className="col-4">
                        <img src={triumph1}/>
                        <h4>WnR Triumph Cafe Racer</h4>
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
                        <t id="timer10">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={triumph2}/>
                        <h4>Back Triumph Cafe Racer</h4>
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
                                <p>Buy now - $2000.00</p>
                            </div>
                        </div>
                        <t id="timer11">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={shoe1}/>
                        <h4>Red Shoes</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon}/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $100.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag}/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $200.00</p>
                            </div>
                        </div>
                        <t id="timer12">  </t>
                        
                    </div>
                    <div className="col-4">
                        <img src={shoe2}/>
                        <h4>White Adidas Runner</h4>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={bidicon}/>
                            </div>
                            <div className="ammount-col">
                                <p>Current bid - $250.00</p>
                            </div>
                        </div>
                        <div className="ammount-box">
                            <div className="ammount-col">
                                <img src={moneybag}/>
                            </div>
                            <div className="ammount-col">
                                <p>Buy now - $300.00</p>
                            </div>
                        </div>
                        <t id="timer13"> </t>
                        
                    </div>

                    <div className="col-4">
                        <img src={triumph1}/>
                        <h4>WnR Triumph Cafe Racer</h4>
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
                        <t id="timer14">  </t>
                        
                    </div>
                    {/* <script>
                        {Countdown("Jan 11, 2022 15:37:25","timer1")}
                        {Countdown("Jan 11, 2022 15:37:25","timer2")}
                        {Countdown("Jan 11, 2022 15:37:25","timer3")}
                        {Countdown("Jan 11, 2022 15:37:25","timer4")}
                        {Countdown("Jan 11, 2022 15:37:25","timer5")}
                        {Countdown("Jan 11, 2022 15:37:25","timer6")}
                        {Countdown("Jan 11, 2022 15:37:25","timer7")}
                        {Countdown("Jan 11, 2022 15:37:25","timer8")}
                        {Countdown("Jan 11, 2022 15:37:25","timer9")}
                    </script> */}
                </div>
            </div>

        </div>
    )
}

export default Homepage;