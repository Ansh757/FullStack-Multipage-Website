import React, {Component, useState, createContext, useEffect} from 'react';
import './style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
import moment from 'moment';



export default function ViewClasses() {
    const { id } = useParams();
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


    const [page, setPage] = useState(1)
    const [page_count, setPageCount] = useState(1)
    
    const url = `http://127.0.0.1:8000/classes/${id}/1/class/all/?limit=1&offset=${page}`;


    useEffect(() => {
        axios({
            method: "get",
            url: url,
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })
        // .then(res => {console.log(res.data.count)
        .then(res => {handle(res.data)
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

        // data.results.map(x => (
        //     console.log(data)
        // ))

    }
    
    // let n = moment(last_modified).format('YYYY MM DD, h:mm:ss');

    
    
    // console.log(data)
    return(
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
                <span class="blue">{Name}'s Subscription History</span>
            </div> 

                    <table class="container">
                        <thead>
                            <tr className='col-heads'>

                                <th><span className='col'>User</span></th>
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

                    <div className='f-btn'>
                    <input type="radio" id="enroll" name="fav_language" value="enroll"/>
                    <label for={("enroll")}>Enroll</label>

                    <input type="radio" id="drop" name="fav_language" value="drop"/>
                    <label for={("drop")}>Drop</label>

                    <input type="radio" id="enroll_all" name="fav_language" value="enroll_all"/>
                    <label for={("enroll_all")}>Enroll All</label>

                    <input type="radio" id="drop_all" name="fav_language" value="drop_all"/>
                    <label for={("drop_all")}>Enroll</label>

                    </div>
                    <footer>
                <h3>© Ansh, Armaan, Giancarlo </h3>
            </footer>
        </div>
    );
}



