//import {useContext, useEffect} from "react";
import {useContext, useEffect, useState} from "react";
import StudioTable from "./StudioTable";
import StudioMap from "./StudioMap";
import APIContext from "../../../Contexts/APIContext";
import APIContextTwo from "../../../Contexts/APIContextTwo";
import axios from 'axios';
import './style.css';
import React from 'react';


const Studios = () => {
    const perPage = 5;
    
    const { latitude } = useContext(APIContextTwo);
    const { longitude } = useContext(APIContextTwo);
    const [params, setParams] = useState({page: 1, lat: "500.00", long: "0.00"});
    const { setStudios } = useContext(APIContext);
    const { studios } = useContext(APIContext);
    const [studiosFixed, setStudiosFixed] = useState([{name: "empty"}]);

    const [messageName, setMessageName] = useState('');
    const [nameFilter, setNameFilter] = useState([]);
    const handleChangeName = event => {
        setMessageName(event.target.value);
    };

    const [messageAmen, setMessageAmen] = useState('');
    const [amenFilter, setAmenFilter] = useState([]);
    const handleChangeAmen = event => {
        setMessageAmen(event.target.value);
    };

    const [messageClass, setMessageClass] = useState('');
    const [classFilter, setClassFilter] = useState([]);
    const handleChangeClass = event => {
        setMessageClass(event.target.value);
    };

    const [messageCoach, setMessageCoach] = useState('');
    const [coachFilter, setCoachFilter] = useState([]);
    const handleChangeCoach = event => {
        setMessageCoach(event.target.value);
    };

    const handleClickAmen = event => {
        //event.preventDefault();
        /*setParams({
            page: 1,
            lat: latitude,
            long: longitude
        })*/
        if (messageAmen.length > 0) {
            setAmenFilter(amenFilter.concat([messageAmen]))
        }
        if (messageName.length > 0) {
            //setNameFilter(nameFilter.concat([messageName]))
            setNameFilter([messageName])
        }
        if (messageClass.length > 0) {
            //setClassFilter(classFilter.concat([messageClass]))
            setClassFilter([messageClass])
        }
        if (messageCoach.length > 0) {
            //setCoachFilter(coachFilter.concat([messageCoach]))
            setCoachFilter([messageCoach])
        }
        clearInput()
    };

    function clearInput(){
        var getValue= document.getElementById("clear1");
          if (getValue.value !="") {
              getValue.value = "";
          }
        var getValue= document.getElementById("clear2");
          if (getValue.value !="") {
              getValue.value = "";
          }
        var getValue= document.getElementById("clear3");
          if (getValue.value !="") {
              getValue.value = "";
          }
        var getValue= document.getElementById("clear4");
          if (getValue.value !="") {
              getValue.value = "";
          }
    }

    const deleteFilter = event => {
        var temp = JSON.parse(JSON.stringify(amenFilter));
        var index = temp.indexOf(event.target.value);
        if (index > -1) { 
            temp.splice(index, 1); 
        }
        setAmenFilter(temp);
        //console.log(amenFilter);
        //setAmenFilter(temp);
        //console.log(amenFilter)
        //if (amenFilter.length == 0) {
         //   setAmenFilter([''])
            //console.log(amenFilter)
        //
        //console.log(amenFilter);
    }


    useEffect(() => {
        //console.log(amenFilter)
        var names = '-'
        var amen = '-'
        var classes = '-'
        var coaches = '-'
        if (nameFilter.length > 0) {
            names = nameFilter.join('-');
        }
        if (amenFilter.length > 0) {
            //console.log(amenFilter)
            amen = amenFilter.join('-');
        }
        if (classFilter.length > 0) {
            classes = classFilter.join('-');
        }
        if (coachFilter.length > 0) {
            coaches = coachFilter.join('-');
        }
        //const names = nameFilter.join('-');
        //const amen = amenFilter.join('-');
        const apiUrl1 = `http://localhost:8000/studios/filter/${names}/${amen}/${classes}/${coaches}/`;
        axios.get(apiUrl1).then((res) => {
            const {data} = res;
            //setStudios(data.results);
            var idArray = data.results.map(function (el) { return el.id; });
            var newArray = studiosFixed.filter(function (el) {

                return idArray.includes(el.id) 
                });
            console.log(studiosFixed)
            console.log(newArray)
            setStudios(newArray);

            });
        
    }, [nameFilter, amenFilter, classFilter, coachFilter])

    useEffect(() => {
        
        const { page, lat, long } = params;
            if (lat != '500.00') {
            //fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}&search=${search}`)
            const apiUrl1 = `http://localhost:8000/studios/${lat}00/${long}00/list?page=${page}`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setStudios(data.results);
                    setStudiosFixed(data.results);
                });
                //console.log(nameFilter);
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
            <div id="filters">
                <div>
                    <input 
                        id="clear1"
                        className="search-studios"
                        value={params.search}
                        type="text"
                        placeholder="Filter by studio name ..."
                        onChange={handleChangeName}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </div>
                <span>
                    <input 
                        id="clear2"
                        key="s-amen"
                        className="search-amenities"
                        value={params.search}
                        type="text"
                        placeholder="Filter by amenities ..."
                        onChange={handleChangeAmen}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </span>
                <span className="filter-tags">
                    {
                        React.Children.toArray(
                            amenFilter.map(( amenFilter, value ) => 
                            <> 
                                <span className="filter-tags-element">
                                    { amenFilter } 
                                    <button className="delete-filter" 
                                            value={amenFilter}
                                            onClick={deleteFilter}
                                    >x
                                    </button>
                                </span>
                            </>
                            )
                        )
                    }
                    {/*amenFilter.map((amenFilter, index) => (
                        <>  
                            <span key={uuid()} className="filter-tags-element">
                                { amenFilter } 
                                <button className="delete-filter" 
                                        value={amenFilter}
                                        onClick={deleteFilter}
                                >x
                                </button>
                            </span>
                        </>
                    ))*/}
                </span>
                <div>
                    <input 
                        id="clear3"
                        className="search-classes"
                        value={params.search}
                        type="text"
                        placeholder="Filter by class name ..."
                        onChange={handleChangeClass}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </div>
                <div>
                    <input 
                        id="clear4"
                        className="search-coaches"
                        value={params.search}
                        type="text"
                        placeholder="Filter by the coaches ..."
                        onChange={handleChangeCoach}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </div>
                <button id="filter-btn" onClick={handleClickAmen}>Apply Filters</button>
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
