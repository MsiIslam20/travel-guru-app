import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fb from '../../images/fb.png'
import google from '../../images/google.png';
import { UserContext } from '../../App';
import { handleFBLogIn, handleGoogleSignIn, createUserWithEmailPassword, initializeLoginFramework, logInUserWithEmailPassword } from './SignInManager';
import './SignUp.css'

const SignUp = () => {

    const [signedInUser, setSignedInUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        displayName: '',
        lastName: '',
        error: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
        if(e.target.name === 'password' || e.target.name === 'confirmPassword'){
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
        if(signedInUser && user.email && user.password){
            if(user.password === user.confirmPassword){
                createUserWithEmailPassword(user.displayName, user.email, user.password)
                .then((res) =>{
                    const newUserInfo = {...user};
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
            }
            else{
                const newUserInfo = {...user};
                newUserInfo.error = "password not match";
                setUser(newUserInfo);
            }
        }
        if(!signedInUser && user.email && user.password) {
            logInUserWithEmailPassword(user.email, user.password)
            .then((res) => {
              handleResponse(res, true);
            })
            .catch(error => {
                const newUserInfo = {};
                newUserInfo.error = error.message;
                setUser(newUserInfo);   
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
                            <h4>Create an account</h4>
                            <form onSubmit={handleSubmit}>
                                {
                                    signedInUser && <input onBlur={handleBlur} placeholder="First Name" className="form-control" type="name" name="displayName" required/>
                                }
                                {
                                    signedInUser && <input onBlur={handleBlur} placeholder="Last Name" className="form-control" type="name"  name="lastName" required/>
                                }
                                <input onBlur={handleBlur} placeholder="Username or Email" className="form-control" type="email" name="email" required/>
                                <input onBlur={handleBlur} placeholder="Password" className="form-control" type="password" name="password" required/>
                                {
                                    signedInUser ? <input onBlur={handleBlur} placeholder="Confirm password" className="form-control" type="password" name="confirmPassword" required/>
                                    :
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="checkbox" id="vehicle1" name="vehicle1" />
                                            <label for="vehicle1"> Remember Me</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p className="text-right text-danger">Forget Password?</p>
                                        </div>
                                    </div>
                                }
                                <p className="error-msg">{user.error}</p>
                                <input className="btn-custom btn btn-warning" type="submit" value={signedInUser ? "Create an account" : "Login"}/>
                            </form>
                            <p className="text-center mt-2 mb-0">{signedInUser ? 'Already have an account?' : "Don't have an account?"} <span className="text-warning pointer"  onClick={() => setSignedInUser(!signedInUser)}>{signedInUser ? 'Log in' : 'Create an account'}</span></p>
                        </div>
                        <div className="other-login text-center">
                            <p>Or</p>
                            <p onClick={handleFbSignUp} className="login-opt"> <img src={fb} alt=""/> Continue with Facebook</p>
                            <p onClick={handleGoogleSignUp} className="login-opt"> <img src={google} alt=""/> Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;