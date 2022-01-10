import React, {useState} from 'react';
import '../assets/css/loginregister.css';
import '../assets/css/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios'

const UserForgotPW = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/");
    } 
    
    const handleSubmit = (event) => {
        axios({
            method: 'post',
            url: 'https://wnc-be-18.herokuapp.com/users/forgot-pwd',
            data:
            {  
                email: email
            }
        },
        { withCredentials: true }
        )
        .then(res => {
            // handleSuccessfulAuth();
        })
        .catch(error => {
            alert("Email not found")
        });
    }

    return (
        <div className="modal js-register-modal open">
        <div className="modal__overlay"></div>
        <div className="modal__body">
            <div className="modal__inner js-register-modal-inner">

                {/* <!-- Register form --> */}
                <div className="register-auth-form">
                        <div className="auth-form__container">
                            
                            <div className="auth-form__header">
                                <h3 className="auth-form__heading">Forgot Password</h3>
                            </div>
                            
                            <div className="auth-form__form">
                                <div className="auth-form__group">
                                    <label>Email</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Enter Email" 
                                        name="email" 
                                        value={email} 
                                        onChange={(e)=> setEmail(e.target.value)} required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    
                                </div>
                            </div>

                            <div className="auth-form_controls">
                                <Link className="btn btn--normal auth-form_controls-back js-register-modal-close" to="/user/login">Back</Link>
                                <button onClick={()=>handleSubmit()} type="submit" className="btn btn--primary js-register-btn">Submit</button>
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserForgotPW;