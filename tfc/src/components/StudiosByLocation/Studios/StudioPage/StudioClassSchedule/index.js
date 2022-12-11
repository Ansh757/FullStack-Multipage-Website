import {useContext, useState, useEffect, useRef} from "react";
//import APIContext from "../../../../Contexts/APIContext";
//import '../StudioTable/style.css';
import {Link, useNavigate, useLocation, useParams} from "react-router-dom";
import axios from 'axios';
import './style.css';

const StudioClassSchedule = (id) => {
    //const { studios } = useContext(APIContext);
    const [classes, setClasses] = useState([]);
    const [holder, setHolder] = useState("test");
    const [field, setField] = useState("name");
    const [count, setCount] = useState(1);
    //const [dates, setDates] = useState([]);
    const [filterToggle, setFilterToggle] = useState(false);
    const [displayMsg, setDisplayMsg] = useState("");
    const [params, setParams] = useState({page: 0, date: false});
    function clearInput(){
        var getValue= document.getElementById("clear5");
          if (getValue.value !="") {
              getValue.value = "";
          }
        var getValue= document.getElementById("clear6");
          if (getValue.value !="") {
              getValue.value = "";
          }
        var getValue= document.getElementById("clear7");
          if (getValue.value !="") {
              getValue.value = "";
          }
    }
    /*useEffect(() => {
        //const { page } = params;
            //fetch(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}&search=${search}`)
        const apiUrl1 = `http://localhost:8000/classes/search/${id}/${field}/${list}`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                //setStudios(data.results);
                //setStudiosFixed(data.results);
            });
 
        
    }, [])*/

    const [message1, setMessage1] = useState('');
    const handleClassName = (event) => {
        setMessage1(event.target.value);
      };

    const [message2, setMessage2] = useState('');
    const handleCoachName = (event) => {
        setMessage2(event.target.value);
    };
    
    const [message3, setMessage3] = useState('');
    const handleDateName = (event) => {
        setMessage3(event.target.value);
    };

    const handleKeyDownClass = event => {
        if (event.key === "Enter") {
            setHolder([])
            if (message1.length > 0) {
                setHolder(message1)
                setMessage1('') 
                setField("name");
            }
            clearInput()
            setParams({page: 0, date: false})
        }
    };
    const handleKeyDownCoach = event => {
        if (event.key === "Enter") {
            setHolder([])
            if (message2.length > 0) {
                setHolder(message2)
                setMessage2('') 
                setField("coach");
            }
            clearInput()
            setParams({page: 0, date: false})
        }
    };
    const handleKeyDownDate = event => {
        if (event.key === "Enter") {
            setHolder([])
            if (message3.length > 0) {
                setHolder(message3)
                setMessage3('') 
                setField("date");
            }
            clearInput()
            setParams({page: 0, date: true})
        }

    };
    const isMounted = useRef(false);
    useEffect(() => {
        if (isMounted.current) {
            var date_regex =  /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
            if (!(date_regex.test(holder)) && params.date == true) {
                setClasses({"id": '',
                        "name": '',
                        "description": '',
                        "coach": '',
                        "keywords": '',
                        "capacity": '',
                        "start_time": '',
                        "end_time": '',
                        "start_recursion": '',
                        "end_recursion": '',
                        "studio": ''})
                setDisplayMsg("Invalid Date")
                setParams({date: false})
            } else {
                //const { pg, date } = params; 
                const { page, date } = params;
                const apiUrl1 = `http://localhost:8000/classes/search/${id.id}/${field}/${holder}/?offset=${page}`;
                    axios.get(apiUrl1).then((res) => {
                        const {data} = res;
                        const lis = data.results
                        if (lis.length > 0) {
                            setClasses(data.results[0]);
                            setDisplayMsg("Classes:")
                            setCount(data.count);
                            console.log(data.count)
                        } else {
                            setClasses({"id": '',
                            "name": '',
                            "description": '',
                            "coach": '',
                            "keywords": '',
                            "capacity": '',
                            "start_time": '',
                            "end_time": '',
                            "start_recursion": '',
                            "end_recursion": '',
                            "studio": ''})
                            setDisplayMsg("No Results Returned")
                            setCount(0);
                        }
                    });
                clearInput()
                setMessage1('')
                if (filterToggle == false) {
                    setFilterToggle(true);
                } else {
                    setFilterToggle(false);
                }

            }
        } else {
            isMounted.current = true;
        }

   }, [holder, params]);
    
    //console.log(count)
    return <div>
            <h1 id="class-schedule">Class Schedule</h1>
            <div id="filters-schedule">
                <div>
                    <input 
                        id="clear5"
                        className="search-class-name"
                        maxLength="30"
                        type="text"
                        placeholder="Search by Class Name ..."
                        onChange={handleClassName}
                        onKeyDown={handleKeyDownClass}
                    />
                </div>
                <span>
                    <input 
                        id="clear6"
                        key="s-amen"
                        className="search-coach-names"
                        maxLength="30"
                        type="text"
                        placeholder="Search by Coach Name ..."
                        onChange={handleCoachName}
                        onKeyDown={handleKeyDownCoach}
                    />
                </span>
                <div>
                <span>
                    <input 
                        id="clear7"
                        className="search-date"
                        maxLength="30"
                        type="text"
                        placeholder="Search by Date ... (e.g 2022-12-13)"
                        onChange={handleDateName}
                        onKeyDown={handleKeyDownDate}
                    />
                </span>
                </div>
                <div id="bruh">
                    <p id="display-msssg">{displayMsg}</p>
                    <ul>
                        <li className="list-itemm"> <b>ID:  </b> {classes.id }</li>
                        <li className="list-itemm"> <b>Name:  </b>{ classes.name }</li>
                        <li className="list-itemm"><b>Description:  </b>{ classes.description } </li>
                        <li className="list-itemm"><b>Coach:  </b>{ classes.coach }</li>
                        <li className="list-itemm"><b>Keywords:  </b>{ classes.keywords }</li>
                        <li className="list-itemm"><b>Capacity :  </b>{ classes.capacity}</li>
                        <li className="list-itemm"><b>Start Time:  </b>{ classes.start_time }</li>
                        <li className="list-itemm"><b> End Time:  </b>{ classes.end_time }</li>
                        <li className="list-itemm"><b>Start Date:  </b>{ classes.start_recursion}</li>
                        <li className="list-itemm"><b>End Date </b>{ classes.end_recursion }</li>
                        <li className="list-itemm"><b>Studio:  </b>{ classes.studio }</li>
                    </ul>
                </div>
                <button className="finale-btn" onClick={() => setParams({
                    ...params,
                    page: Math.max(0, params.page - 1)
                })}>
                    prev
                </button>
                <button className="finale-btn" onClick={() => setParams({
                    ...params,
                    page: Math.min(count - 1, params.page + 1)
                })}>
                    next
                </button>
            </div>
        </div>
}

export default StudioClassSchedule;