import React, {Component, useState} from 'react';
import './style.css';
import func from './hours';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";




// Reference: https://codepen.io/grohit/pen/jObGzdG


const url = "http://127.0.0.1:8000/accounts/profile/";


export default class User_Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "",
            username: "",
        }
    };

    componentDidMount() {
        // const user_id = +this.props.match.params.id;
        this.requestedUser()
    }

    requestedUser() {
        axios.get(url, { headers: { Authorization:localStorage.getItem('SavedToken'), 'Content-Type': 'application/json'}})
            .then(res => this.setState({'username': res.data.username, 'id': res.data.id}))
    }
    render() {
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
                            <li><a href='/studios' data-item='Studios'>Studios</a></li>
                            <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-logo">
                    <Link to={"/" + this.state.id + "/profile/"}>
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
                            Welcome <br/><span className='bluey'> {this.state.username}</span>
                        </span>
                    </div>
                    <div className='main-btn'>
                        <Link to="/main">
                            <button className='btn'>My Schedule</button>
                        </Link>
                        <Link to={"/" + this.state.id + "/view-plan"}>
                            <button className='btn'>Plan History</button>
                        </Link>
                        <Link to={"/main"}>
                            <button className='btn'>Classes History</button>
                        </Link>
                        <Link to={"/" + this.state.id + "/update-plan"}>
                            <button className='btn'>Change Plan</button>
                        </Link>
                        <Link to={"/" + this.state.id + "/update-card"}>
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
                        {/* <div className="header">
                                <span id="open-status"><small className="openorclosed">We are</small></span>
                            </div>
                            <table className="opening-hours-table">
                                <tr id="Monday" itemProp="openingHours" title="Open Monday at 9am to 6pm">
                                    <td>Monday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Tuesday" itemProp="openingHours" title="Open Tuesday at 9am to 6pm">
                                    <td>Tuesday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Wednesday" itemProp="openingHours" title="Open Wednesday at 9am to 6pm">
                                    <td>Wednesday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Thursday" itemProp="openingHours" title="Open Thursday at 9am to 8pm">
                                    <td>Thursday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">20:00</td>
                                </tr>
                                <tr id="Friday" itemProp="openingHours" title="Open Friday at 9am to 6pm">
                                    <td>Friday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Saturday" itemProp="openingHours" title="Open Saturday at 10am to 6pm">
                                    <td>Saturday</td>
                                    <td className="opens">10:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Sunday" itemProp="openingHours" title="Open Sunday at 11am to 4pm">
                                    <td>Sunday</td>
                                    <td className="opens">11:00</td>
                                    <td>-</td>
                                    <td className="closes">16:00</td>
                                </tr>
                            </table>
                        </div> */}
                    </div>


                </div>

                <hr />
                <div className="section section-3">

                </div>
                {/*<div className="section section-4">*/}

                {/*</div>*/}
                <footer>
                    <h3>Â© Ansh, Armaan, Giancarlo </h3>
                </footer>
            </div>

        </div>
    )
    }}
