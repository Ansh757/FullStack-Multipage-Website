import {useContext} from "react";
import APIContext from "../../../../Contexts/APIContext";
import React from "react";

const SelectButton = () => {

    const { studios } = useContext(APIContext);

    const studioList = () => {
        for (let i = 0; i < studios.length; i++) {
            console.log(studios[i]);
        }
    }

    return <>

    </>
}

export default SelectButton;