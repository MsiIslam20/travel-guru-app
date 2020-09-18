import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import fakeData from '../../fakeData/TourData'
import './PlaceDetails.css'

const PlaceDetails = () => {

    const {id} = useParams();
    const product = fakeData.filter(place => place.id === parseInt(id));
    const {name, description} = product[0];

    let history = useHistory();
    const handleClick = (id) => {
        history.push(`/search/${id}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="places-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div>
                    <div className="col-md-5 mx-auto">
                        <form onSubmit={handleSubmit} className="place-from">
                            <label>Origin</label>
                            <input className="form-control" type="text" placeholder="ex- Dhaka" required/>
                            <label>Destination</label>
                            <input className="form-control" type="text" defaultValue={name}/>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Form</label>
                                    <input required className="form-control" type="date" id="birthday" name="birthday" />
                                </div>
                                <div className="col-md-6">
                                    <label>To</label>
                                    <input required className="form-control" type="date" id="birthday2" name="birthday2" />
                                </div>                                
                            </div>
                            <input type="submit" onClick={() => handleClick(id)} className="btn-custom btn btn-warning" value="Start Booking" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceDetails;