import React, {useState} from 'react';
import '../assets/css/loginregister.css';
import '../assets/css/base.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
    let history = useHistory();
    const[OTP, setOTP] = useState('');
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    //const[address, setAddress] = useState('');
    const[password, setPassword] = useState('');
    const[passwordcf, setPasswordCf] = useState('');

    const handleSuccessfulAuth = () => {
        history.push("/user/login");
    } 

    const handleSubmit = async (event) => {
        // axios({
        //     method: 'post',
        //     url: 'https://wnc-be-18.herokuapp.com/users/register',
        //     data: {
        //         name: name,
        //         email: email,
        //         //address: address,
        //         password: password,
        //         user_type: "1"
        //     }
        // },
        // { withCredentials: true })
        //     .then(response => {
        //         //response.ok
        //         if (response.status === 200) {
        //             console.log('regis res', response);
        //             handleSuccessfulAuth();
        //         }
        //       })
        //       .catch(error => {
        //         console.log("registration error", error);
        //       });
        // event.preventDefault();

        try {
            // check otp is available
            await axios({url: "https://wnc-be-18.herokuapp.com/otp",
                        method: "patch",
                        data: {
                            email: email,
                            otp: OTP
                        }
                        });
            //check register
            await axios({url: "https://wnc-be-18.herokuapp.com/users/register",
                        method: "post",
                        data: {
                            name: name,
                            email: email,
                            //address: address,
                            password: password,
                            user_type: "1"
                        }
                    })
            //register successfully
            history.push("/user/login")
        } 
        catch (error) {
            history.push("/user/register")
        }

    }

    const GetOTP = (event) => {
        axios({
            method: 'post',
            url: 'https://wnc-be-18.herokuapp.com/otp',
            data: {
                email: email
            }
        },
        { withCredentials: true })
            .then(res => {
                console.log(res.data)
              })
              .catch(error => {
                console.log("registration error", error);
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
                                <h3 className="auth-form__heading">Register</h3>
                                <Link className="auth-form__switch-btn" to="/user/login">Login</Link>
                            </div>
                            
                            <div className="auth-form__form">
                                {/* <!-- error/success --> */}
                                <div className="auth-form__group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Enter Name" 
                                        name = "name"
                                        value={name} 
                                        onChange={(e)=> setName(e.target.value)}
                                        required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    
                                </div>
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
                                {/* <div className="auth-form__group">
                                    <label>Address</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Address" 
                                        name="address" 
                                        value={address} 
                                        onChange={(e)=> setAddress(e.target.value)} required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    
                                </div> */}
                                <div className="auth-form__group">
                                    <label>Password</label>
                                    <input 
                                        type="password" 
                                        className="auth-form__input" 
                                        placeholder="Enter Password" 
                                        name="password" 
                                        value={password} 
                                        onChange={(e)=> setPassword(e.target.value)} required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    
                                </div>
                                <div className="auth-form__group">
                                    <label>Confirm Password</label>
                                    <input 
                                        type="password" 
                                        className="auth-form__input" 
                                        placeholder="Enter Confirm Password" 
                                        name="confirm password" 
                                        value={passwordcf} 
                                        onChange={(e)=> setPasswordCf(e.target.value)} required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    
                                </div>
                                <div className="auth-form__group">
                                    <label>OTP</label>
                                    <input 
                                        type="text" 
                                        className="auth-form__input" 
                                        placeholder="Enter OTP" 
                                        name="OTP" 
                                        value={OTP} 
                                        onChange={(e)=> setOTP(e.target.value)} required
                                    />
                                    <i className="auth-form__group-check-icon fas fa-check-circle"></i>
                                    <i className="auth-form__group-exclamation-icon fas fa-exclamation-circle"></i>
                                    <button onClick={()=>GetOTP()} type="submit" className="btn btn--primary js-register-btn">Get OTP</button>
                                </div>
                            </div>
                            <p className="auth-form__policy-text">
                                    OTP code will be send to your email!
                            </p>
                            <div className="auth-form__aside">
                                <p className="auth-form__policy-text">
                                    By registering, you agree to ForBidDen's
                                    <Link to="#" className="auth-form__text-link">{' '}Terms of Services{' '}</Link> & 
                                    <Link to="#" className="auth-form__text-link">{' '}Privacy Policy</Link>   
                                </p>
                            </div>

                            <div className="auth-form_controls">
                                <Link className="btn btn--normal auth-form_controls-back js-register-modal-close" to="/user">Back</Link>
                                <button onClick={()=> {handleSubmit()}} type="submit" className="btn btn--primary js-register-btn">Register</button>
                            </div>
                        </div>
                    
                </div>

            </div>
        </div>
    </div>
    );
}

export default Registration;



