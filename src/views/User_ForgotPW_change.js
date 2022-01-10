import React, {useState} from 'react';
import '../assets/css/loginregister.css';
import '../assets/css/base.css';
import {Link,useParams, useLocation,useHistory} from 'react-router-dom';
import axios from 'axios'

const UserForgotPWChange = () => {
    let history = useHistory();
    const [password, setPW] = useState('');
    const [passwordcf, setPWCf] = useState('');
    const handleSuccessfulAuth = () => {
        history.push("/");
    } 

    var urlParams = new URLSearchParams(window.location.search);
    const search = useLocation().search;
    const { regCode } = useParams()
    const handleSubmit = (event) => {
        axios({
            method: 'patch',
            url: 'https://wnc-be-18.herokuapp.com/users/forgot-pwd',
            data:
            {  
                email: urlParams.get('email'),
                regCode: regCode,
                password: password
            }
        },
        { withCredentials: true }
        )
        .then(res => {
            handleSuccessfulAuth();
        })
        .catch(error => {
            history.push("Invalid OTP code");
        });
    }

    return (
        <div className="modal open">
            <div className="modal__overlay">
            </div>
            <div className="modal__body">
                <div className="modal__inner">
                    
                        <div className="login-auth-form">
                            <div className="auth-form__container">
                                <div className="auth-form__form">
                                    <div className="auth-form__group">
                                        <label>Password</label>
                                        <input 
                                            type="password"     
                                            className="auth-form__input" 
                                            name="password"
                                            placeholder="Enter Password" 
                                            value={password}
                                            onChange={(e)=> setPW(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                    <div className="auth-form__group">
                                        <label>Confirm Password</label>
                                        <input 
                                            type="password" 
                                            className="auth-form__input" 
                                            name="passwordcf"
                                            placeholder="Enter Confirm Password" 
                                            value={passwordcf}
                                            onChange={(e)=> setPWCf(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                </div>

                                <div className="auth-form_controls">
                                    <Link to="/user/forgotpw" className="btn btn--normal auth-form_controls-back">Back</Link>
                                    <button onClick={()=>handleSubmit()} type="submit" className="btn btn--primary">Submit</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default UserForgotPWChange;