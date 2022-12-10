import {createContext, useState} from "react";

const empty = [{name: "empty"}] ;

export const useAPIContext = () => {
    //const [studios, setStudios] = useState(empty);
    const [studios, setStudios] = useState([]);

    return {
        studios,
        setStudios,
    }
}

const APIContext = createContext({
    //studios: [{name: "empty"}], setStudios: () => {},
    studios: [], setStudios: () => {},
})

export default APIContext;