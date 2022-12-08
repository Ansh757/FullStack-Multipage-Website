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
    const [params, setParams] = useState({page: 1, lat: "500.00", long: "0.00"});
    const { setStudios } = useContext(APIContext);
    //const { studios } = useContext(APIContext);
    const [message, setMessage] = useState('');

    const [nameFilter, setNameFilter] = useState([]);

    const handleChange = event => {
        setMessage(event.target.value);
    };

    const handleClick = event => {
        //event.preventDefault();
        setParams({
            page: 1,
            lat: latitude,
            long: longitude
        })
        setNameFilter(nameFilter.concat([message]))
        clearInput()
    };
    function clearInput(){
        var getValue= document.getElementById("clear");
          if (getValue.value !="") {
              getValue.value = "";
          }
    }
    useEffect(() => {
        if (nameFilter.length > 0) {
            const names = nameFilter.join('-');
            const apiUrl1 = `http://localhost:8000/studios/filter/${names}/-/-/-/`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                //setStudios(data.results);
                console.log(data);
            });
        }
    }, [nameFilter])

    useEffect(() => {
        
        const { page, lat, long } = params;
            if (lat != '500.00') {
            //const { search } = params;
            //fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}&search=${search}`)
            const apiUrl1 = `http://localhost:8000/studios/${lat}00/${long}00/list?page=${page}`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setStudios(data.results);
                });
                console.log(nameFilter);
        }
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
            <div >
                <input 
                    id="clear"
                    className="search-studios"
                    value={params.search}
                    type="text"
                    placeholder="Filter by the studio name ..."
                    onChange={handleChange}
                />
                <button onClick={handleClick}>Click</button>
            </div>
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
