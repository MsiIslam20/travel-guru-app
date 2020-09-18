import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Hotel.css'

const Hotel = (props) => {
    const {title, src, guest, bedrooms, bed, bath, feature, more, rating, price, total } = props.hotel;
    return (
        <>
            <div className="col-md-12 hotels-main">
                <div className="row">
                    <div className="col-md-6">
                        <img src={src} alt="" className="img-fluid"/>
                    </div>
                    <div className="col-md-6">
                        <h5>{title}</h5>
                        <p>Guest {guest} Bedrooms {bedrooms} Beds {bed} Baths {bath}</p>
                        <p>{feature}</p>
                        <p>{more}</p>
                        <p>{rating}(20) <strong>${price}/night</strong> {total} total</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hotel;