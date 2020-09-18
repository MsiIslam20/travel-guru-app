import React, { useState } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Home.css'
import fakeData from '../../fakeData/TourData'
import Places from '../Places/Places';

const Home = () => {

    const [places, setPlaces] = useState(fakeData)

    return (
        <>
            <div className="home-inner-main">
                <div className="row home-inner d-flex align-items-center">
                    <div className="col-md-4">
                        <div className="home-title">
                            <h1>Travel Tour</h1>
                            <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip.</p>
                            <button className="btn btn-warning">Explore The World</button>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            {
                                places.map(place => <Places key={place.id} place={place}></Places>)
                            }                                              
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;