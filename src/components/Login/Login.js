import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fb from '../../images/fb.png'
import google from '../../images/google.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { handleFBLogIn, handleGoogleSignIn, logInUserWithEmailPassword, initializeLoginFramework } from './SignInManager';

const Login = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        name: '',
        email: '',
        password: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    initializeLoginFramework();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignUp = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true)
        });
    }

    const handleFbSignUp = () => {
        handleFBLogIn()
        .then(res => {
          handleResponse(res, true);
        })
    }

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value); 
        }
        if(e.target.name === 'password'){
          const isValidPassword = e.target.value.length > 6;
          const isNumber = /\d{1}/.test(e.target.value);
          isFieldValid = isValidPassword && isNumber;
        }
        if(isFieldValid) {
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if(user.email && user.password) {
            logInUserWithEmailPassword(user.email, user.password)
            .then((res) => {
              handleResponse(res, true);
            })
          }

        e.preventDefault();
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
          history.replace(from);
        }
      }

    return (
        <>
            <div className="form container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="form-inner">
                            <h4>Login</h4>
                            <form onSubmit={handleSubmit}>
                                <input onBlur={handleBlur} placeholder="Username or Email" className="form-control" name="email" type="email" required/>
                                <input onBlur={handleBlur} placeholder="Password" className="form-control" name="password" type="password" required/>
                                <div className="row">
                                    <div className="col-md-6">

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p className="text-warning">Forgot Password</p>
                                    </div>
                                </div>
                                <input className="btn-custom btn btn-warning" type="submit" value="Login"/>
                            </form>
                            <p className="text-center mt-2 mb-0">Don’t have an account? <span className="text-warning"> <Link to="/signup">Create an account</Link></span></p>
                        </div>
                        <div className="other-login text-center">
                            <p>Or</p>
                            <p onClick={handleGoogleSignUp} className="login-opt"> <img src={fb} alt=""/> Continue with Facebook</p>
                            <p onClick={handleFbSignUp} className="login-opt"> <img src={google} alt=""/> Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;