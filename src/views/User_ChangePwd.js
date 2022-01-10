import React, {useState} from 'react';
import '../assets/css/loginregister.css';
import '../assets/css/base.css';
import {Link,useHistory} from 'react-router-dom';
import axios from 'axios'

const UserChangePwd = () => {
    let history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPW] = useState('');
    const [newpassword, setNewPwd] = useState('');
    const [newpasswordcf, setNewPwdCf] = useState('');
    
    const handleSubmit = (event) => {
        axios({
            method: 'post',
            url: 'https://wnc-be-18.herokuapp.com/users/change-pwd',
            data:
            {  
                email: email,
                password: password,
                new_password: newpassword,
                new_password_confirmation: newpasswordcf
            }
        },
        { withCredentials: true }
        )
        .then(res => {
            alert("Change Password Successfully!")
            history.push("/user/profile")
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
                                        <label>New Password</label>
                                        <input 
                                            type="password"     
                                            className="auth-form__input" 
                                            name="new password"
                                            placeholder="Enter New Password" 
                                            value={newpassword}
                                            onChange={(e)=> setNewPwd(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                    <div className="auth-form__group">
                                        <label>Confirm New Password</label>
                                        <input 
                                            type="password" 
                                            className="auth-form__input" 
                                            name="new password confirm"
                                            placeholder="Enter New Confirm Password" 
                                            value={newpasswordcf}
                                            onChange={(e)=> setNewPwdCf(e.target.value)}
                                            required
                                        />
                                        <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                        <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    </div>
                                </div>

                                <div className="auth-form_controls">
                                    <Link to="/user/profile" className="btn btn--normal auth-form_controls-back">Back</Link>
                                    <button onClick={()=>handleSubmit()} type="submit" className="btn btn--primary">Submit</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default UserChangePwd;