import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import './style.css';
import axios from 'axios';

function StudioPage(props) {
    const location = useLocation()
    const { id } = location.state
    //console.log(id);
    const [studioName, setStudioName] = useState("");
    const [studioAdd, setStudioAdd] = useState("");
    const [studioLat, setStudioLat] = useState("");
    const [studioLong, setStudioLong] = useState("");
    const [studioImage, setStudioImage] = useState([]);
    const [studioAmen, setStudioAmen] = useState([]);
    const [studioDir, setStudioDir] = useState("");

    useEffect(() => {
        //console.log(id)
        const apiUrl1 = `http://localhost:8000/studios/${id}/`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                setStudioName(data.name);
                setStudioAdd(data.address);
                setStudioLat(data.longitude);
                setStudioLong(data.latitude);
                setStudioImage(data.image);
                setStudioAmen(data.ammenities);
                setStudioDir(data.directions);
                
            });
    }, [])
    //console.log(studioName);

    return (
        <>
            <div> {studioName} </div>
            {/*<div> {studioAdd} </div>
            <div> {studioLat} </div>
            <div> {studioLong} </div>
            <div> {studioImage} </div>
            <div> {studioAmen} </div>
             <div> {studioDir} </div> */}
        </>
    )
}

export default StudioPage;
