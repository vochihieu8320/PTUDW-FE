import React from 'react';
import Homepage from './views/Homepage';
import Registration from './components/Registration';
import Login from './components/Login';
import Footer from './components/Footer';
import Header from './components/Header';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserForgotPW from './views/User_ForgotPW';
import UserProfile from './views/User_Profile';
import UserProductDetails from './views/User_Product_Details';
import UserForgotPWChange from './views/User_ForgotPW_change';
import UserChangePwd from './views/User_ChangePwd';
import UserProductCategory from './views/User_Category';
import UserProductBid from './views/Bid_Product';

// Chữ cái đầu phải viết hoa mới được
class App extends React.Component {
    render() {
      return (
          <Router>
             <Switch>
                <Route exact path = "/user" >
                    <Navbar/>
                    <Header/>
                    <Homepage />
                    <Footer/>
                </Route>
                <Route exact path = "/" >
                    <Redirect to="/user"/>
                </Route>
                <Route exact path = "/user/register">
                    <Registration />
                </Route>
                <Route exact path = "/user/login">
                    <Login />
                </Route>
                <Route exact path = "/user/forgotpw">
                    <UserForgotPW />
                </Route>
                <Route exact path = "/forgot-pwd/:regCode">
                    <UserForgotPWChange />
                </Route>
                <Route exact path = "/user/profile">
                    <Navbar/>
                    <UserProfile />
                    <Footer/>
                </Route>
                <Route exact path = "/user/products/detail">
                    <Navbar/>
                    <UserProductDetails />
                    <Footer/>
                </Route>
                <Route exact path = "/user/products">
                    <Navbar/>
                    <UserProductCategory />
                </Route>
                <Route exact path = "/user/changepwd">
                    <UserChangePwd/>
                </Route>
                <Route exact path = "/user/productbid">
                    <Navbar/>
                    <UserProductBid />
                    <Footer/>
                </Route>
            </Switch>
          </Router>
    );
  }
}

export default App;
