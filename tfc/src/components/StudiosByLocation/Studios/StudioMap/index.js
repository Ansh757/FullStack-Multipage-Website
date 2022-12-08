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
    positions[index] = {lat: parseFloat(studios.latitude), lng: parseFloat(studios.longitude)}
  )
  );
  //console.log(studios[0].name);
  console.log(positions);
  return (
    <LoadScript
      //googleMapsApiKey="AIzaSyA253bih_2qiK97Ua7zKLKgzYnWAVT9meY"
      googleMapsApiKey=""
    >
      <GoogleMap
        id="marker-example"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        {positions.map((positions, index) => (
          <MarkerF key={index}
            //onLoad={onLoad}
            position={positions}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)

/*import {useContext} from "react";
import APIContext from "../../../../Contexts/APIContext";
import { Map, GoogleApiWrapper, Marker  } from 'google-maps-react';
import React from 'react';

const mapStyles = {
    width: '100%',
    height: '100%'
  };
  
  class StudioMap extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "React"
      };
    }
  
    render() {
      return (
        <div>
          <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={{
              lat: 43.00,
              lng: -73.00
            }}
          >
           <Marker
            onClick={this.onMarkerClick}
            name={'This is test name'}
          />
          </Map>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyA253bih_2qiK97Ua7zKLKgzYnWAVT9meY'
  })(StudioMap); */