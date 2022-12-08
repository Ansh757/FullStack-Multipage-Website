import React, {Component, useState} from 'react';
import './style.css';
import func from './hours';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import {Link, Switch} from "react-router-dom";


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
                                <li><a href='tfc/src/components/User/User-Main/index#' data-item='Classes'>Classes</a></li>
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
                        <h1 className=''>
                            Welcome <br/><span> {this.state.username}</span>
                        </h1>
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

}




// const User_Main = () => {
//
//
//
//     return (
//         <div className='user-main'>
//             <header>
//                 <div className="website-logo">
//                     <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
//                 </div>
//                 <div className="navbar">
//                     <nav>
//                         <ul className="menuItems">
//                             <li><a href='#' data-item='Home'>Home</a></li>
//                             <li><a href='#' data-item='Classes'>Classes</a></li>
//                             <li><a href='/studios' data-item='Studios'>Studios</a></li>
//                             <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
//                         </ul>
//                     </nav>
//                 </div>
//                 <div className="user-logo">
//                     <button className="user-btn">
//                         <i className="fa-solid fa-user"></i>
//                     </button>
//                     <button className="user-btn">
//                         <i className="fa-solid fa-right-from-bracket"></i>
//                     </button>
//                 </div>
//
//             </header>
//             <div className="main-container">
//                 <div className="section section-1">
//                     <h1 className=''>
//                         Welcome <br/><span> Bot1212!</span>
//                     </h1>
//                 </div>
//                 <hr />
//                 <div className="section section-2">
//
//                     <div className='col1' style={{backgroundColor:"white"}}>
//                         <img src= "https://upload.wikimedia.org/wikipedia/commons/1/1c/Rosemount%2C_MN_-_Anytime_Fitness_gym_exterior_%2843460728481%29.jpg"></img>
//
//                     </div>
//
//                     <div className="col1" style={{marginBottom:"14%" ,marginRight:"-3.5%", textOverflow:"clip"}}>
//                         <span>About Us: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</span> <br/> <br/> <br/><br/>
//                         <div className="opening-hours-content section">
//                         <div class="table-content">
//                             <h2>Opening Hours</h2>
//                             <ul class="responsive-table">
//                                 <li class="table-header">
//                                 <div class="col col-1">Day</div>
//                                 <div class="col col-2">Opening</div>
//                                 <div class="col col-3">Closing</div>
//                                 <div class="col col-4">Pets Allowed</div>
//                                 </li>
//                                 <li class="table-row">
//                                 <div class="col col-1" data-label="Day">Mon-Thur</div>
//                                 <div class="col col-2" data-label="Opening">9:00am</div>
//                                 <div class="col col-3" data-label="Closing">6:00pm</div>
//                                 <div class="col col-4" data-label="Pets Allowed">Yes</div>
//                                 </li>
//                                 <li class="table-row">
//                                 <div class="col col-1" data-label="Day">Friday</div>
//                                 <div class="col col-2" data-label="Opening">8:00am</div>
//                                 <div class="col col-3" data-label="Closing">12:00pm</div>
//                                 <div class="col col-4" data-label="Pets Allowed">Yes</div>
//                                 </li>
//                                 <li class="table-row">
//                                 <div class="col col-1" data-label="Day">Saturday</div>
//                                 <div class="col col-2" data-label="Opening">10:00am</div>
//                                 <div class="col col-3" data-label="Closing">4:00pm</div>
//                                 <div class="col col-4" data-label="Pets Allowed">Pending</div>
//                                 </li>
//                                 <li class="table-row">
//                                 <div class="col col-1" data-label="Day">Sunday</div>
//                                 <div class="col col-2" data-label="Opening">9:00am</div>
//                                 <div class="col col-3" data-label="Closing">7:00pm</div>
//                                 <div class="col col-4" data-label="Pets Allowed">Pending</div>
//                                 </li>
//                             </ul>
//                             </div>
//                         </div>
//                     </div>
//
//
//                 </div>
//
//                 <hr />
//                 <div className="section section-3">
//
//                 </div>
//                 <footer>
//                     <h3>© Ansh, Armaan, Giancarlo </h3>
//                 </footer>
//             </div>
//
//         </div>
//     )
// }
//
// export default User_Main;
