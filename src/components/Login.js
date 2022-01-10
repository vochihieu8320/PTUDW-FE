import React, {useState} from 'react';
import '../assets/css/loginregister.css';
import '../assets/css/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'
import jwtDecode from 'jwt-decode';

const Login = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPwd] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/user");
    } 
    
    const handleSubmit = (event) => {
        axios({
            method: 'post',
            url: 'https://wnc-be-18.herokuapp.com/users/login',
            data:
            {  
                email: email,
                password: password
            }
        },
        { withCredentials: true }
        )
        .then(res => {
            const decoded = Object(jwtDecode(res.data.token));
            const token = res.data.token
            const user = {
                ...decoded,
                token
            };
            localStorage.setItem("currentUser",JSON.stringify(user))
            localStorage.setItem("refreshToken",res.data.refreshToken)
            handleSuccessfulAuth();
        })
        .catch(error => {
            console.log("login error", error);
            history.push("/user/login");
        });
        event.preventDefault();
    }

    return (
        <div className="modal open">
            <div className="modal__overlay">
            </div>
            <div className="modal__body">
                <div className="modal__inner">
                    <form onSubmit={handleSubmit}>
                    {/* <!-- Login form --> */}
                        <div className="login-auth-form">
                            <div className="auth-form__container">
                                
                                <div className="auth-form__header">
                                    <h3 className="auth-form__heading">Login</h3>
                                    <Link to="/user/register" className="auth-form__switch-btn">Register</Link>
                                </div>
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <label>Email</label>
                                        <input 
                                            type="text" 
                                            className="auth-form__input" 
                                            name="email"
                                            placeholder="Enter Email" 
                                            value={email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                    <div className="auth-form__group">
                                        <label>Password</label>
                                        <input 
                                            type="password"     
                                            className="auth-form__input" 
                                            name="password"
                                            placeholder="Enter Password" 
                                            value={password}
                                            onChange={(e)=> setPwd(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                    </div>

                                    <div className="auth-form_controls">
                                        <Link to="/user" className="btn btn--normal auth-form_controls-back">Back</Link>
                                        <button type="submit" className="btn btn--primary">Login</button>
                                    </div>

                                <div className="auth-form__aside">
                                    <p className="auth-form__register-text">
                                        Don't have an account?{' '}
                                        <Link to="/user/register" className="auth-form__register-link">Register Now</Link>
                                    </p>
                                    <p className="auth-form__register-text">
                                        <Link to="/user/forgotpw" className="auth-form__register-link">Forgot Password</Link>
                                    </p>
                                </div>

                            </div>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;