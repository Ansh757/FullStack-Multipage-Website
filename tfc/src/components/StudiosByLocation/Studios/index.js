//import {useContext, useEffect} from "react";
import {useContext, useEffect, useState} from "react";
import StudioTable from "./StudioTable";
import StudioMap from "./StudioMap";
import APIContext from "../../../Contexts/APIContext";
import APIContextTwo from "../../../Contexts/APIContextTwo";
import axios from 'axios';
import './style.css';

const Studios = () => {
    const perPage = 5;
    
    const { latitude } = useContext(APIContextTwo);
    const { longitude } = useContext(APIContextTwo);
    const [params, setParams] = useState({page: 1, search: "", lat: "0.00", long: "0.00"});
    const { setStudios } = useContext(APIContext);
    //const { studios } = useContext(APIContext);

    
    useEffect(() => {
        const { page, search, lat, long } = params;
        //const { search } = params;
        //fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}&search=${search}`)
        const apiUrl1 = `http://localhost:8000/studios/${lat}00/${long}00/list?page=${page}`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                setStudios(data.results);
            });
        
    }, [params])

    return (

        <>  
            <button onClick={() => setParams({
                ...params,
                lat: latitude,
                long: longitude
            })}>
                Get Studios Near You !
            </button>
            {/*Search
            <input
                style={{width: 300, height: 20, fontSize: 18, margin: 4}}
                value={params.search}
                onChange={(event) => {
                    setParams({
                        search: event.target.value,
                        page: 1,
                    })
                }}
            /> */}
            {/*<p> Studio: { studios[0].name }, Address: { studios[0].address }, 
            Distance: { studios[0].distance } 
            </p> */}
            <div id="parent">
                <div id="table">
                    <StudioTable perPage={perPage} params={params} />
                </div>
                <div id="map">
                    {/*<StudioMap /> */}
                </div>
            </div>
            <button className="page-btn" onClick={() => setParams({
                    ...params,
                    page: Math.max(1, params.page - 1)
                })}>
                    prev
                </button>
                <button className="page-btn" onClick={() => setParams({
                    ...params,
                    page: params.page + 1
                })}>
                    next
                </button>
        </>
    )
}

export default Studios;
