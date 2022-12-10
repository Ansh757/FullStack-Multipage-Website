import React, {Component, useEffect, useReducer, useState} from 'react';
import './style.css';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";




// Reference: https://codepen.io/grohit/pen/jObGzdG


const url = "http://127.0.0.1:8000/accounts/profile/";

const User_Main = () => {
    const navigate = useNavigate();
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const p = async() => {
        await axios.get(url, {
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })
            .then(res => {
                setId(res.data.id)
                setUsername(res.data.username)
            })

    }
    useEffect(() => {
        if (!localStorage.getItem('SavedToken')) {
            navigate('/login');
        } else {
            p()
        }
    }, [localStorage.getItem('SavedToken')])

    console.log(username)
        return (
            <div className='user-main'>
                <header>
                    <div className="website-logo">
                        <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                    </div>
                    <div className="navbar">
                        <nav>
                            <ul className="menuItems">
                                <li><a href='/main' data-item='Home'>Home</a></li>
                                <li><a href={'/' + id + '/classes/all'} data-item='Classes'>Classes</a></li>
                                <li><a href={'/' + id + '/studios'} data-item='Studios'>Studios</a></li>
                                <li><a href={'/plans/' + id} data-item='Subscriptions'>Subscriptions</a></li>
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
            <div className="main-container">
                <div className="section section-1">
                    <div className='title-holder'>
                        <span className='big-title'>
                            Welcome <br/><span className='bluey'> {username}</span>
                        </span>
                    </div>
                    <div className='main-btn'>
                        <Link to={"/" + id + "/classes/schedule" }>
                            <button className='btn-11'>My Schedule</button>
                        </Link>
                        <Link to={"/" + id + "/view-plan"}>
                            <button className='btn-11'>Plan History</button>
                        </Link>
                        <Link to={"/" + id + "/view-classes"}>
                            <button className='btn-11'>Classes History</button>
                        </Link>
                        <Link to={"/" + id + "/update-plan"}>
                            <button className='btn-11'>Change Plan</button>
                        </Link>
                        <Link to={"/" + id + "/update-card"}>
                            <button className='btn-11'>Change Card</button>
                        </Link>


                        </div>
                    </div>
                    <hr />
                    <div className="section section-2">

                        <div className='col1' style={{backgroundColor:"white"}}>
                            <img src= "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rosemount%2C_MN_-_Anytime_Fitness_gym_exterior_%2843460728481%29.jpg"></img>

                        </div>

                        <div className="col1" style={{marginBottom:"14%" ,marginRight:"-3.5%", textOverflow:"clip"}}>
                            <span>About Us: TFC is an Canadian gym chain with more than 700 clubs across the United States and Canada. 
                                The company was formed in 2022 and is based in Toronto, Canada. TFC was founded in 2022 by founder Armaan, Ansh and Giancarlo 
                                in Toronto</span> <br/> <br/> <br/><br/>
                            <div className="opening-hours-content section">
                                <div className="table-content">
                                    <h2>Opening Hours</h2>
                                    <ul className="responsive-table">
                                        <li className="table-header">
                                            <div className="col col-1">Day</div>
                                            <div className="col col-2">Opening</div>
                                            <div className="col col-3">Closing</div>
                                            <div className="col col-4">Pets Allowed</div>
                                        </li>
                                        <li className="table-row">
                                            <div className="col col-1" data-label="Day">Mon-Thur</div>
                                            <div className="col col-2" data-label="Opening">9:00am</div>
                                            <div className="col col-3" data-label="Closing">6:00pm</div>
                                            <div className="col col-4" data-label="Pets Allowed">Yes</div>
                                        </li>
                                        <li className="table-row">
                                            <div className="col col-1" data-label="Day">Friday</div>
                                            <div className="col col-2" data-label="Opening">8:00am</div>
                                            <div className="col col-3" data-label="Closing">12:00pm</div>
                                            <div className="col col-4" data-label="Pets Allowed">Yes</div>
                                        </li>
                                        <li className="table-row">
                                            <div className="col col-1" data-label="Day">Saturday</div>
                                            <div className="col col-2" data-label="Opening">10:00am</div>
                                            <div className="col col-3" data-label="Closing">4:00pm</div>
                                            <div className="col col-4" data-label="Pets Allowed">Pending</div>
                                        </li>
                                        <li className="table-row">
                                            <div className="col col-1" data-label="Day">Sunday</div>
                                            <div className="col col-2" data-label="Opening">9:00am</div>
                                            <div className="col col-3" data-label="Closing">7:00pm</div>
                                            <div className="col col-4" data-label="Pets Allowed">Pending</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                    </div>

                    <hr />
                    <div className="section section-3">

                    </div>
                    <footer>
                        <h3>© Ansh, Armaan, Giancarlo </h3>
                    </footer>
                </div>

            </div>
        )
    }
export default User_Main;
