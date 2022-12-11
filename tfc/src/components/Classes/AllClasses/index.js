import React, {Component, useState, createContext, useEffect, useContext} from 'react';
import '../AllClasses/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
import moment from 'moment';
import APIContext from "../../../Contexts/APIContext";

export default function ViewClasses() {
    const { id } = useParams();
    const { sid } = useParams();
    const { name } = useContext(APIContext);
    const [uid, setUid] = useState("");
    const [description, setDescription] = useState("");
    const [Name, setName] = useState("");
    const [Coach, setCoach] = useState("");
    const [Keywords, setKeywords] = useState("");
    const [capacity, setCapacity] = useState("");
    const [Studio, setStudio] = useState("")
    const [Start_Time, setStart_Time] = useState("");
    const [End_Time, setEnd_Time] = useState("");
    const [Start_Recursion, setStart_Recursion] = useState("");
    const [End_Recursion, setEnd_Recursion] = useState("");
    
    const [classAction, setClassAction] = useState("");
    const [option, setOption] = useState("");
    const [page, setPage] = useState(1);
    const [page_count, setPageCount] = useState(1);
    const [classList, setClassList] = useState([]);
    const [formErrors, setFormErrors] = useState("");
    const url = `http://127.0.0.1:8000/classes/${id}/${id}/class/all/?offset=${page}`;


    useEffect(() => {
        axios({
            method: "get",
            url: url,
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })
        // .then(res => {console.log(res.data.count)
        .then(res => {
            console.log(res.data.results)
            setClassList(res.data.results)
            handle(res.data)
            setPageCount(res.data.count)
            })

    }, [page])

    function handle(res) {
        setUid(res.results[0]['id'])
        setDescription(res.results[0]["description"])
        setCapacity(res.results[0]["capacity"])
        setName(res.results[0]['name'])
        setCoach(res.results[0]['coach'])
        setKeywords(res.results[0]['keywords'])
        setStudio(res.results[0]['studio'])
        setStart_Time(res.results[0]['start_time'])
        setEnd_Time(res.results[0]['end_time'])
        setStart_Recursion(res.results[0]['start_recursion'])
        setEnd_Recursion(res.results[0]['end_recursion'])
    }

    function setOp(e) {
        console.log(e.target.value)
        setOption(e.target.value)
    }

    function toEnrollIn(e){
        setClassAction(e.target.value)
    }
    // let n = moment(last_modified).format('YYYY MM DD, h:mm:ss');


    function handleEnrollment(res) {
        console.log(res)
        let k = Object.keys(res);
        if ('Success' in k) {
            alert("Success!");
        }
    }

    function get_errors(keys, data){
        console.log(keys)
        console.log(data)
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            console.log(keys)
            let k = keys[i]
            errors[k] = data.response.data[k]
        }

        setFormErrors(errors);
        console.log(errors)
        return errors
    }

    const enrollOrDrop = async(e) => {
        e.preventDefault();
        axios({
            method: "put",
            url: `http://localhost:8000/classes/${id}/${sid}/class/${uid}/enroll-drop/`,
            data: {
                _enrolled: classAction,
                _enroll_or_drop: option
            },
            headers: {
                Authorization: localStorage.getItem('SavedToken'),
            }
        }) .then(res => handleEnrollment(res))
            .catch(err => {
            get_errors(Object.keys(err.response.data), err)}
        )
    };

    return(
        <APIContext.Provider value={name}>
        <div className='all-div'>
            <header>
            <div className="website-logo">
                    <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="menuItems">
                            <li><a href='/main' data-item='Home'>Home</a></li>
                            <li><a href='' data-item='Classes'>Classes</a></li>
                            <li><a href='/studios' data-item='Studios'>Studios</a></li>
                            <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-logo">
                    {/*<Link to={"/" + this.state.id + "/profile/"}>*/}
                    {/*    
                    {/*</Link>*/}
                    <button className="user-btn">
                            <i className="fa-solid fa-user"></i>
                    </button>
                    <button className="user-btn">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>
        </header>
             <div className='main-title'>
                <span class="blue">All Classes in {name}</span>
            </div> 

                    <table class="container">
                        <thead>
                            <tr className='col-heads'>

                                <th><span className='col'>Class ID</span></th>
                                <th><span className='col'>Name</span></th>
                                <th><span className='col'>Description</span></th>
                                <th><span className='col'>Studio</span></th>
                                <th><span className='col'>Coach</span></th>
                                <th><span className='col'>Keywords</span></th>
                                <th><span className='col'>Capacity</span></th>
                                <th><span className='col'>Start Time</span></th>
                                <th><span className='col'>End Time</span></th>
                                <th><span className='col'>Start Recursion</span></th>
                                <th><span className='col'>End Recursion</span></th>
                                
                            </tr>
                        </thead>
                        <tbody className='last-hope'>
                            <tr>
                                <td className='roww'>{uid}</td>
                                <td className='roww'>{Name}</td>
                                <td className='roww'>{description}</td>
                                <td className='roww'>{Studio}</td>
                                <td className='roww'>{Coach}</td>
                                <td className='roww'>{Keywords}</td>
                                <td className='roww'>{capacity}</td>
                                <td className='roww'>{Start_Time}</td>
                                <td className='roww'>{End_Time}</td>
                                <td className='roww'>{Start_Recursion}</td>
                                <td className='roww'>{End_Recursion}</td>

                                {/* <td className='roww'>{id}</td> */}
                                {/* <td className='roww'>{Enrollment_Status}</td> */}

                            </tr>
                        </tbody>
                    </table> 

                    <div className='next-btn'>
                        { page > 1 ?<button className='bn' onClick={() => setPage(page - 1)}>Prev</button> : <></>}
                        { page < page_count ? <button className='bn' onClick={() => setPage(page + 1)}> Next </button>: <></>}
                    </div>

                    <div className='set2'>
                        <select id="status" value={classAction} onChange={e => toEnrollIn(e)}>
                         <option value="#">-----</option>
                        {classList.map((studios, index) => (
                                <option key={index} value={studios.name} onClick={event => setClassAction(event.target.value)}>{studios.name}</option>
                        ))}
                        </select>
                    </div>

                    <div className='f-btn'>
                            <input type="radio" id="enroll" name="grp" value="enroll" onChange={event => setOp(event)}/>
                            <label htmlFor={("enroll")}>Enroll</label>

                            <input type="radio" id="drop" name="grp" value="drop" onChange={event => setOp(event)}/>
                            <label htmlFor={("drop")}>Drop</label>

                            <input type="radio" id="enroll_all" name="grp" value="enroll_all" onChange={event => setOp(event)}/>
                            <label htmlFor={("enroll_all")}>Enroll All</label>

                            <input type="radio" id="drop_all" name="grp" value="drop_all" onChange={event => setOp(event)}/>
                            <label htmlFor={("drop_all")}>Enroll</label>
                            <button type="submit" onClick={e => enrollOrDrop(e)}></button>
                            <span className="err-6">{formErrors["Message"]}</span>
                    </div>

                    <footer>
                <h3>© Ansh, Armaan, Giancarlo </h3>
            </footer>
        </div>
        </APIContext.Provider>
    );
}


