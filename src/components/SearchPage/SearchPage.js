import React from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './SearchPage.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/TourData'
import Hotel from '../Hotel/Hotel';

const containerStyle = {
    width: '100%',
    height: '100%',
    overflow: 'visiable',
    position: 'none'
  };
   
  const center = {
    lat: -3.745,
    lng: -38.523
  };

const SearchPage = () => {

    const {id} = useParams();
    const product = fakeData.filter(place => place.id === parseInt(id));
    const {name, hotels} = product[0];
    
    const [map, setMap] = React.useState(null)
 
    const onLoad = React.useCallback(function callback(map) {
      const bounds = new window.google.maps.LatLngBounds();
      map.fitBounds(bounds);
      setMap(map)
    }, [])
   
    const onUnmount = React.useCallback(function callback(map) {
      setMap(null)
    }, [])

    return (
        <div className="container search-container">
            <div className="row">
                <div className="col-md-6">
                    <div className="search-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <p>252 stays Apr 13-17 3 guests</p>
                                <h1>Stay in {name}</h1>
                            </div>
                            {
                                hotels.map(hotel => <Hotel hotel={hotel}></Hotel>)
                            }
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="search-map">
                    <LoadScript
                        googleMapsApiKey="AIzaSyCRP2E3BhaVKYs7BvNytBNumU0MBmjhhxc"
                        >
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={center}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            { /* Child components, such as markers, info windows, etc. */ }
                            <></>
                        </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;