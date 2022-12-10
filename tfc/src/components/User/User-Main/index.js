import React, {Component, useEffect, useReducer, useState} from 'react';
import './style.css';
import axios from 'axios';
import {Link} from "react-router-dom";




// Reference: https://codepen.io/grohit/pen/jObGzdG


const url = "http://127.0.0.1:8000/accounts/profile/";

const User_Main = () => {
    // const {id} = useParams();

    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    // const [reducerValue, forceUpdate ] = useReducer(x => x + 1, 0)
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
        p()
    })

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
                                <li><a href='#' data-item='Classes'>Classes</a></li>
                                <li><a href={'/' + id + '/studios'} data-item='Studios'>Studios</a></li>
                                <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="user-logo">
                        <Link to={"/" + id + "/profile/"}>
                            <button className="user-btn">
                                <i className="fa-solid fa-user"></i>
                            </button>
                        </Link>
                        <button className="user-btn">
                            <i className="fa-solid fa-right-from-bracket"></i>
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
                        <Link to="/main">
                            <button className='btn'>My Schedule</button>
                        </Link>
                        <Link to={"/" + id + "/view-plan"}>
                            <button className='btn'>Plan History</button>
                        </Link>
                        <Link to={"/main"}>
                            <button className='btn'>Classes History</button>
                        </Link>
                        <Link to={"/" + id + "/update-plan"}>
                            <button className='btn'>Change Plan</button>
                        </Link>
                        <Link to={"/" + id + "/update-card"}>
                            <button className='btn'>Change Card</button>
                        </Link>


                        </div>
                    </div>
                    <hr />
                    <div className="section section-2">

                        <div className='col1' style={{backgroundColor:"white"}}>
                            <img src= "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rosemount%2C_MN_-_Anytime_Fitness_gym_exterior_%2843460728481%29.jpg"></img>

                        </div>

                        <div className="col1" style={{marginBottom:"14%" ,marginRight:"-3.5%", textOverflow:"clip"}}>
                            <span>About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span> <br/> <br/> <br/><br/>
                            <div className="opening-hours-content section">
                                <div class="table-content">
                                    <h2>Opening Hours</h2>
                                    <ul class="responsive-table">
                                        <li class="table-header">
                                            <div class="col col-1">Day</div>
                                            <div class="col col-2">Opening</div>
                                            <div class="col col-3">Closing</div>
                                            <div class="col col-4">Pets Allowed</div>
                                        </li>
                                        <li class="table-row">
                                            <div class="col col-1" data-label="Day">Mon-Thur</div>
                                            <div class="col col-2" data-label="Opening">9:00am</div>
                                            <div class="col col-3" data-label="Closing">6:00pm</div>
                                            <div class="col col-4" data-label="Pets Allowed">Yes</div>
                                        </li>
                                        <li class="table-row">
                                            <div class="col col-1" data-label="Day">Friday</div>
                                            <div class="col col-2" data-label="Opening">8:00am</div>
                                            <div class="col col-3" data-label="Closing">12:00pm</div>
                                            <div class="col col-4" data-label="Pets Allowed">Yes</div>
                                        </li>
                                        <li class="table-row">
                                            <div class="col col-1" data-label="Day">Saturday</div>
                                            <div class="col col-2" data-label="Opening">10:00am</div>
                                            <div class="col col-3" data-label="Closing">4:00pm</div>
                                            <div class="col col-4" data-label="Pets Allowed">Pending</div>
                                        </li>
                                        <li class="table-row">
                                            <div class="col col-1" data-label="Day">Sunday</div>
                                            <div class="col col-2" data-label="Opening">9:00am</div>
                                            <div class="col col-3" data-label="Closing">7:00pm</div>
                                            <div class="col col-4" data-label="Pets Allowed">Pending</div>
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
