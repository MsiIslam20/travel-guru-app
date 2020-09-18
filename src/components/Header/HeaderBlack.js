import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo-black.png';
import './Header.css'

const HeaderBlack = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top bg-navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logo} alt="" className="img-fluid logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse header-bl" id="navbarSupportedContent">                   
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#0">News</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Destination</a>
                            </li>     
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Blog</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" href="#0">Contact</a>
                            </li>  
                            <li className="nav-item">
                                <button className="btn btn-warning">Login</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default HeaderBlack;