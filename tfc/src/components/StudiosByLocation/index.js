import {useContext, useEffect, useState} from "react";
import React from 'react';
import Studios from "./Studios";
//import APIContext from "../../Contexts/APIContext";
import APIContextTwo from "../../Contexts/APIContextTwo";

const ListStudios = () => {

    //const [status, setStatus] = useState(null);
    const { setLatitude } = useContext(APIContextTwo);
    const { setLongitude } = useContext(APIContextTwo);

    navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
    });
    
    /*if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('Locating...');
        navigator.geolocation.getCurrentPosition((position) => {
            setStatus("Located");
            setLatitude(position.coords.latitude);
            //setLatitude("120.00");
            //setLongitude(position.coords.longitude); 
        }, () => {
            setStatus('Unable to retrieve your location');
        }); 
    }  */

    //<Studios latitude={latitude}longitude={longitude}/> 
    // <button onClick={getLocation}>Get Location</button>
    return (
        <div className="App">
          <h1>Studios</h1>
          {/*<p>{status}</p>*/}
          <Studios />
        </div>
        
      );
}
        {/*
        <>  
            <button onClick={() => setParams({
                ...params,
                latitude: 0.00,
                longitude: 0.00
            })}>
                List Studios near me
            </button> 
             <Studios latitude={latitude}longitude={longitude}/> 
        </> 
        */}

export default ListStudios;