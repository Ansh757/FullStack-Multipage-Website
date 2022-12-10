//import {useContext, useEffect} from "react";
import {useContext, useEffect, useState, useReducer} from "react";
import StudioTable from "./StudioTable";
import StudioMap from "./StudioMap";
import APIContext from "../../../Contexts/APIContext";
import APIContextTwo from "../../../Contexts/APIContextTwo";
import axios from 'axios';
import '../Studios/style.css';
import React from 'react';

const Studios = () => {
    const perPage = 5;
    
    const { latitude } = useContext(APIContextTwo);
    const { longitude } = useContext(APIContextTwo);
    const [params, setParams] = useState({page: 1, lat: "500.00", long: "0.00"});
    const { setStudios } = useContext(APIContext);
    const { studios } = useContext(APIContext);
    //const [studiosFixed, setStudiosFixed] = useState([{name: "empty"}]);
    const [idLen, setIdLen] = useState("100000");

    const [filterToggle, setFilterToggle] = useState(false);
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
        if (filterToggle == false) {
            setFilterToggle(true);
        } else {
            setFilterToggle(false);
        }
        //event.preventDefault();
        /*setParams({
            page: 1,
            lat: latitude,
            long: longitude
        })*/
        setNameFilter([])
        setCoachFilter([])
        if (messageAmen.length > 0) {
            setAmenFilter(amenFilter.concat([messageAmen]))
            setMessageAmen('') 
        }
        if (messageName.length > 0) {
            //setNameFilter(nameFilter.concat([messageName]))
            setNameFilter([messageName])
        }
        if (messageClass.length > 0) {
            //setClassFilter(classFilter.concat([messageClass]))
            setClassFilter(classFilter.concat([messageClass]))
            setMessageClass('') 
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

    const deleteFilterAmen = event => {
        var temp = JSON.parse(JSON.stringify(amenFilter));
        var index = temp.indexOf(event.target.value);
        if (index > -1) { 
            temp.splice(index, 1); 
        }
        setAmenFilter(temp);
        //setAmenFilter(temp);

        //if (amenFilter.length == 0) {
         //   setAmenFilter([''])

        //

    }

    const deleteFilterClass = event => {
        var temp = JSON.parse(JSON.stringify(classFilter));
        var index = temp.indexOf(event.target.value);
        if (index > -1) { 
            temp.splice(index, 1); 
        }
        setClassFilter(temp);
        //setAmenFilter(temp);

        //if (amenFilter.length == 0) {
         //   setAmenFilter([''])

        //

    }

    const deleteSearchName = event => {
        setNameFilter(['']);
        setMessageName('')
    }
    const deleteSearchCoach = event => {
        setCoachFilter(['']);
        setMessageCoach('')
    }
    useEffect(() => {
        const lat = params.lat
        var ids = "10000"
        if (lat != '500.00') {
            //console.log("ds")
            var names = '-'
            var amen = '-'
            var classes = '-'
            var coaches = '-'
            if (nameFilter.length > 0) {
                names = nameFilter.join('-').replace(/ /g,"_");
            }
            if (amenFilter.length > 0) {

                amen = amenFilter.join('-').replace(/ /g,"_");
            }
            if (classFilter.length > 0) {
                classes = classFilter.join('-').replace(/ /g,"_");
            }
            if (coachFilter.length > 0) {
                coaches = coachFilter.join('-').replace(/ /g,"_");
            }

            //const names = nameFilter.join('-');
            //const amen = amenFilter.join('-');
            const apiUrl1 = `http://localhost:8000/studios/filter/${names}/${amen}/${classes}/${coaches}/`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                //console.log(data)
                var idArray = data.map(function (el) { return el.id; });
                //console.log(idArray)
                if (idArray.length == 0) {
                    ids = "10000"
                    idArray[0] = 'hi'
                } else {
                    ids = idArray.join('-')
                   // setIds(90)
                    //setIds(idArray.join('-'));
                    //console.log(ids);
                }
                //console.log(Math.ceil(idArray.length /  5))
                setIdLen(Math.ceil(idArray.length /  5))
                const { page, lat, long } = params;
                const apiUrl1 = `http://localhost:8000/studios/${lat}00/${long}00/${ids}/list?page=${page}`;
                    axios.get(apiUrl1).then((res) => {
                        const {data} = res;
                        setStudios(data.results);
                        //alert(studios.id);
                        //setStudiosFixed(data.results);
                    });
                
                //setNameFilter([])
                //setClassFilter([])
                //setCoachFilter([])
            //var newArray = studiosFixed.filter(function (el) {
             //   return idArray.includes(el.id) 
            //});
            //setStudios(newArray);
            });
        }
        
    }, [filterToggle, params])

    /*useEffect(() => {
        
        const { page, lat, long } = params;
            if (lat === '500.00') {
            //fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}&search=${search}`)
            const apiUrl1 = `http://localhost:8000/studios/${lat}00/${long}00/10000/list?page=${page}`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setStudios(data.results);
                    //setStudiosFixed(data.results);
                });
 
        }
    }, [params])*/
    //console.log(studios)
    return (

        <>  
            <button onClick={() => setParams({
                ...params,
                lat: latitude,
                long: longitude
            })}>
                Get Studios Near You !
            </button>
            <div id="filters2">
                <div>
                    <input 
                        id="clear1"
                        className="search-studios"
                        value={params.search}
                        maxLength="30"
                        type="text"
                        placeholder="Search for a studio ..."
                        onChange={handleChangeName}
                    />
                    <span className="search-tag">Searching For: <b>{nameFilter}</b>
                                    <button className="delete-filter" 
                                            value={nameFilter}
                                            onClick={deleteSearchName}
                                    >Reset Search
                                    </button>
                    </span>
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </div>
                <span>
                    <input 
                        id="clear2"
                        key="s-amen"
                        className="search-amenities"
                        maxLength="30"
                        value={params.search}
                        type="text"
                        placeholder="Filter by amenities ..."
                        onChange={handleChangeAmen}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </span>
                <div>
                <span className="filter-tags-amen">
                    {
                        React.Children.toArray(
                            amenFilter.map(( amenFilter, value ) => 
                            <> 
                                <span className="filter-tags-element">
                                    { amenFilter } 
                                    <button className="delete-filter" 
                                            value={amenFilter}
                                            onClick={deleteFilterAmen}
                                    >x
                                    </button>
                                </span>
                            </>
                            )
                        )
                    }
                </span>
                </div>
                <div>
                <span>
                    <input 
                        id="clear3"
                        className="search-classes"
                        maxLength="30"
                        value={params.search}
                        type="text"
                        placeholder="Filter by class names ..."
                        onChange={handleChangeClass}
                    />
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </span>
                <span className="filter-tags-class">
                    {
                        React.Children.toArray(
                            classFilter.map(( classFilter, value ) => 
                            <> 
                                <span className="filter-tags-element">
                                    { classFilter } 
                                    <button className="delete-filter" 
                                            value={classFilter}
                                            onClick={deleteFilterClass}
                                    >x
                                    </button>
                                </span>
                            </>
                            )
                        )
                    }
                </span>
                </div>
                <div>
                    <input 
                        id="clear4"
                        className="search-coaches"
                        maxLength="40"
                        value={params.search}
                        type="text"
                        placeholder="Search for a coach ..."
                        onChange={handleChangeCoach}
                    />
                    <span className="search-tag">Searching For: <b>{coachFilter}</b>
                                    <button className="delete-filter" 
                                            value={coachFilter}
                                            onClick={deleteSearchCoach}
                                    >Reset Search
                                    </button>
                    </span>
                    {/*<button onClick={handleClickName}>Click</button>*/}
                </div>
                <button id="filter-btn" onClick={handleClickAmen}>Apply Changes</button>
            </div>
            <div id="parent">
                <div id="table">
                    <StudioTable perPage={perPage} params={params} />
                </div>
                <div id="map">
                    <StudioMap /> 
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
                    page: Math.min(idLen, params.page + 1)
                })}>
                    next
                </button>
        </>
    )
}
export default Studios;
