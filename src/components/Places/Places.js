import React from 'react';
import { useHistory } from 'react-router-dom';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Places.css';

const Places = (props) => {
    const {name, img, id} = props.place;

    let history = useHistory();
    const handleClick = (props) => {
        history.push(`/places/${props}`)
    }

    return (
        <div className="col-md-4" onClick={() => handleClick(id)}>
            <div className="home-img">
                <img className="img-fluid" src={img} alt=""/>
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Places;