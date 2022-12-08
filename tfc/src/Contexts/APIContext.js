import {createContext, useState} from "react";

const empty = [{name: "empty"}] ;

export const useAPIContext = () => {
    const [studios, setStudios] = useState(empty);

    return {
        studios,
        setStudios,
    }
}

const APIContext = createContext({
    studios: [{name: "empty"}], setStudios: () => {},
})

export default APIContext;