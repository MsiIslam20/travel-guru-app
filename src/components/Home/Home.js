import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Home.css'
import fakeData from '../../fakeData/TourData'
import Places from '../Places/Places';
import Header from '../Header/Header';

const Home = () => {

    const [places, setPlaces] = useState(fakeData)

    return (
        <>
            <div className="home-inner-main">
                <div className="row home-inner d-flex align-items-center">
                    <div className="col-md-4">
                        <div className="home-title">
                            <h1>Cox's bazar</h1>
                            <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                            <button className="btn btn-warning">Booking</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                places.map(place => <Places place={place}></Places>)
                            }                                              
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;