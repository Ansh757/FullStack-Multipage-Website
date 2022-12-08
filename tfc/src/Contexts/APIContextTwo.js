import {createContext, useState} from "react";

//const empty = [{name: "empty"}] ;

export const useAPIContextTwo = () => {
    const [latitude, setLatitude] = useState("0.00");
    const [longitude, setLongitude] = useState("0.00");

    return {
        latitude,
        setLatitude,
        longitude,
        setLongitude,
    }
}

const APIContextTwo = createContext({
   latitude: "0.00", setLatitude: () => {},
   longitude: "0.00", setLongitude: () => {},
})

export default APIContextTwo;