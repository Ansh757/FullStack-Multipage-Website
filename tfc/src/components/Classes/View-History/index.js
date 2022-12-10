import React, {Component, useState, createContext, useEffect} from 'react';
import '../View-History/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
import moment from 'moment';

const ViewClasses = () =>  {
    const {id} = useParams();
    const [user, setUser] = useState("");
    const [Enrollment_Status, setEnroll] = useState("");
    const [Name, setName] = useState("");
    const [Coach, setCoach] = useState("");
    const [Keywords, setKeywords] = useState("");
    const [Studio, setStudio] = useState("")
    const [Start_Time, setStart_Time] = useState("");
    const [End_Time, setEnd_Time] = useState("");
    const [Start_Recursion, setStart_Recursion] = useState("");
    const [End_Recursion, setEnd_Recursion] = useState("");


    const [page, setPage] = useState(1)
    const [page_count, setPageCount] = useState(1)

    const url = `http://127.0.0.1:8000/classes/${id}/class/history/?limit=1&offset=${page}/`;


    useEffect(() => {
        const func = async () => axios({
            method: "get",
            url: url,
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })
            // .then(res => {console.log(res.data.count)
            .then(res => {
                handle(res.data)
                setPageCount(res.data.count)
            })

    }, [page]);


    function handle(res) {
        setUser(res.results[0]["user"])
        setEnroll(res.results[0]["Enrollment_Status"])
        setName(res.results[0]['Name'])
        setCoach(res.results[0]['Coach'])
        setKeywords(res.results[0]['Keywords'])
        setStudio(res.results[0]['Studio'])
        setStart_Time(res.results[0]['Start_Time'])
        setEnd_Time(res.results[0]['End_Time'])
        setStart_Recursion(res.results[0]['Start_Recursion'])
        setEnd_Recursion(res.results[0]['End_Recursion'])
    }
        return (
            <div className='classesDiv'>
                <header>
                    <div className="website-logo">
                        <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png"
                             alt="logo-tfc-picture"/>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul className="menuItems">
                                <li><a href='/main' data-item='Home'>Home</a></li>
                                <li><a href={'/' + id + '/classes/all'} data-item='Classes'>Classes</a></li>
                                <li><a href='/studios' data-item='Studios'>Studios</a></li>
                                <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="user-logo">
                        <Link to={"/" + id + "/profile/"}>
                            <button className="user-btn">
                                <i className="fa-solid fa-user too"></i>
                            </button>
                        </Link>
                        <button id="icons" className="user-btn" onClick={() => {
                            localStorage.removeItem('SavedToken')
                            window.location.reload()
                        }
                        }>
                            <i id="icons" className="fa-solid fa-right-from-bracket too"></i>
                        </button>
                    </div>
                </header>
                <div className='main-title'>
                    <span class="blue">{user}'s Subscription History</span>
                </div>
                <table class="container">
                    <thead>
                    <tr className='col-heads'>

                        <th><span className='col'>User</span></th>
                        {/* <th><span className='col'>Id</span></th> */}
                        <th><span className='col'>Studio</span></th>
                        <th><span className='col'>Enrollment</span></th>
                        <th><span className='col'>Name</span></th>
                        <th><span className='col'>Coach</span></th>
                        <th><span className='col'>Keywords</span></th>
                        <th><span className='col'>Start Time</span></th>
                        <th><span className='col'>End Time</span></th>
                        <th><span className='col'>Start Recursion</span></th>
                        <th><span className='col'>End Recursion</span></th>

                    </tr>
                    </thead>
                    <tbody className='last-hope'>
                    <tr>
                        <td className='roww'>{user}</td>
                        <td className='roww'>{Studio}</td>
                        <td className='roww'>{Enrollment_Status}</td>
                        <td className='roww'>{Name}</td>
                        <td className='roww'>{Coach}</td>
                        <td className='roww'>{Keywords}</td>
                        <td className='roww'>{Start_Time}</td>
                        <td className='roww'>{End_Time}</td>
                        <td className='roww'>{Start_Recursion}</td>
                        <td className='roww'>{End_Recursion}</td>

                    </tr>
                    </tbody>
                </table>

                <div className='next-btn'>
                    {page > 1 ? <button className='bn' onClick={() => setPage(page - 1)}>Prev</button> : <></>}
                    {page < page_count ?
                        <button className='bn' onClick={() => setPage(page + 1)}> Next </button> : <></>}
                </div>
                <footer>
                    <h3>© Ansh, Armaan, Giancarlo </h3>
                </footer>
            </div>
        );
    }


export default ViewClasses;