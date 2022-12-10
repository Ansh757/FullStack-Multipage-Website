import React from 'react'
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import {useContext} from "react";
import APIContext from "../../../../Contexts/APIContext";
import APIContextTwo from "../../../../Contexts/APIContextTwo";

const containerStyle = {
  //display: 'fixed',
  //top: '10px',
  //left: '50%',
  width: '80%',
  height: '90%',
  margin: '20px'
};

//const onLoad = marker => {
//  console.log('marker: ', marker)
//}

function MyComponent() {

  const { latitude } = useContext(APIContextTwo);
  const { longitude } = useContext(APIContextTwo);
  const { studios } = useContext(APIContext);

  const center = {
    lat: latitude,
    lng: longitude
  };

  const positions = []
  studios.map((studios, index) => (
    positions[index] = [{lat: parseFloat(studios.latitude), lng: parseFloat(studios.longitude)}, studios.name]
  )
  );
  //console.log(studios[0].name);
  console.log(positions);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBLr2_ae3ol_HX87yjq-h95Shz4qxJqeLY"
      //googleMapsApiKey=""
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {positions.map((positions, index) => (
          <MarkerF key={index}
            label={positions[1]}
            position={positions[0]}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
