import {useContext, useState, useEffect} from "react";
//import APIContext from "../../../../Contexts/APIContext";
//import '../StudioTable/style.css';
import {Link, useNavigate, useLocation, useParams} from "react-router-dom";
import axios from 'axios';
import './style.css';

const StudioClassSchedule = (id) => {
    //const { studios } = useContext(APIContext);
    const [classes, setClasses] = useState([]);
    const [filterToggle, setFilterToggle] = useState(false);

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

    var info = {}
    const handleKeyDownClass = event => {
        if (event.key === "Enter") {

            const val = message1
            const apiUrl1 = `http://localhost:8000/classes/search/${id.id}/name/${val}/`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setClasses(data.results[0]);
                });
            clearInput()
            setMessage1('')
            if (filterToggle == false) {
                setFilterToggle(true);
            } else {
                setFilterToggle(false);
            }
        }
    };

    const handleKeyDownCoach = event => {
        if (event.key === "Enter") {
            const val = message2
            const apiUrl1 = `http://localhost:8000/classes/search/${id.id}/coach/${val}/`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setClasses(data.results[0]);
           
                });
            
            clearInput()
            setMessage2('')
            if (filterToggle == false) {
                setFilterToggle(true);
            } else {
                setFilterToggle(false);
            }
        }
    };

    const handleKeyDownDate = event => {
        if (event.key === "Enter") {
            const val = message3

            const apiUrl1 = `http://localhost:8000/classes/search/${id.id}/date/${val}/`;
                axios.get(apiUrl1).then((res) => {
                    const {data} = res;
                    setClasses(data.results[0]);

                });
                clearInput()
                setMessage3('')
                if (filterToggle == false) {
                    setFilterToggle(true);
                } else {
                    setFilterToggle(false);
                }
        }
    };

    useEffect(() => {
        if (filterToggle == false) {
            setFilterToggle(true);
        } else {
            setFilterToggle(false);
        }
        console.log(classes.name);
    }, [classes])

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
                    <ul>
                        <li> <b>ID:  </b> {classes.id }</li>
                        <li> <b>Name:  </b>{ classes.name }</li>
                        <li><b>Description:  </b>{ classes.description } </li>
                        <li><b>Coach:  </b>{ classes.coach }</li>
                        <li><b>Keywords:  </b>{ classes.keywords }</li>
                        <li><b>Capacity :  </b>{ classes.capacity}</li>
                        <li><b>Start Time:  </b>{ classes.start_time }</li>
                        <li><b> End Time:  </b>{ classes.end_time }</li>
                        <li><b>Start Date:  </b>{ classes.start_recursion}</li>
                        <li><b>:End Date </b>{ classes.end_recursion }</li>
                        <li><b>Studio:  </b>{ classes.studio }</li>
                    </ul>
                </div>
            </div>
        </div>
}

export default StudioClassSchedule;