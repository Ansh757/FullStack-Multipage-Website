import React, {Component, useState, createContext, useEffect, useContext} from 'react';
import '../Enrollment/style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
import moment from 'moment';
import APIContext from "../../../Contexts/APIContext";

// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp

const Enrollment = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { studio_id } = useParams();
    const { class_id } = useParams();
    const [Studio, setStudio] = useState("");
    const [classAction, setClassAction] = useState("");
    const { studios } = useContext(APIContext);
    // const { setstudios } = useContext(APIContext);
    const send_url =  "http://127.0.0.1:8000/classes/" + id + "/" + studio_id + "/class/" + class_id + "/enroll-drop/";

    const studioList = () => {
        for (let i = 0; i < studios.length; i++) {
            console.log(studios[i]);
        }
            }
    studioList()
    function setOption(e) {
        console.log(e.target.value)
        setClassAction(e.target.value)
    }

    function toEnrollIn(e){
        setStudio(e.target.value)
    }

    const Done = async (e) => {
        e.preventDefault()
        axios({
            method: "put",
            url: send_url,
            data: {
                '_enrolled': Studio,
                '_enroll_or_drop': classAction
            }, headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        }) .then(res => console.log(res))
    }



    return (
        <APIContext.Provider>
            <div className='update-card'>
                <div className="row-99">
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
                    <section className="section-2">
                        <main>

                            {/*<select name="country" value={this.state.data.country}>*/}
                            {/*    {this.countryData.map((e, key) => {*/}
                            {/*        return <option key={key} value={e.value}>{e.name}</option>;*/}
                            {/*    })}*/}
                            {/*</select>*/}

                            <select id="studios" value={Studio} onChange={event => toEnrollIn(event)} required>
                                <option value="">-------</option>
                                <option value="gym"> gym </option>
                                <option value="">Studio Name </option>
                                <option value="3">Studio Name </option>
                            </select>
                            <select id="status" value={classAction} onChange={event => setOption(event)} required>
                                <option value="">-------</option>
                                <option value="enroll">Enroll </option>
                                <option value="drop">Drop</option>
                                <option value="enroll_all">Enroll All</option>
                                <option value="drop_all">Drop All</option>
                            </select>
                            <select id="estatus" value={classAction} onChange={event => setOption(event)} required>
                                <option value="">-------</option>
                                <option value="enroll">Enroll </option>
                                <option value="drop">Drop</option>
                            </select>
                            {/*<button id="enroll" className="btn" value="enroll" onClick={event => setOption(event)}>*/}
                            {/*    Enroll*/}
                            {/*</button>*/}
                            {/*<button id="drop" className="btn" value="drop" onClick={event => setOption(event)}>*/}
                            {/*    Drop*/}
                            {/*</button>*/}
                            {/*<button id="enroll_all" className="btn" value="enroll_all" onClick={event => setOption(event)}>*/}
                            {/*    Enroll All*/}
                            {/*</button>*/}
                            {/*<button id="drop_all" className="btn" value="drop_all" onClick={event => setOption(event)}>*/}
                            {/*    Drop All*/}
                            {/*</button>*/}
                            <button id="finish" onClick={e => Done(e)}>
                                Finish
                            </button>


                            {/*<button onClick={}> CLICK ME</button>*/}
                            {/*<form onSubmit={(e) => submitForm(e)}>*/}
                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="username" type="text" placeholder="Username"*/}
                            {/*               onChange={(e) => setUsername(e.target.value)} value={username} data-required/>*/}
                            {/*        <span>{formErrors['username']}</span>*/}
                            {/*    </div>*/}
                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="first_name" type="text" onChange={(e) => setFirstName(e.target.value)}*/}
                            {/*               placeholder="First Name" value={first_name} data-required/>*/}
                            {/*        <span>{formErrors['first_name']}</span>*/}
                            {/*    </div>*/}

                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="last_name" type="text" name="text"*/}
                            {/*               onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"*/}
                            {/*               value={last_name} data-required/>*/}
                            {/*        <span>{formErrors['last_name']}</span>*/}
                            {/*    </div>*/}
                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="email" type="email" onChange={(e) => setEmail(e.target.value)}*/}
                            {/*               placeholder="Email" value={email} data-email data-required/>*/}
                            {/*        <span>{formErrors['email']}</span>*/}
                            {/*    </div>*/}
                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)}*/}
                            {/*               value={password} placeholder="Password"*/}
                            {/*               data-required/>*/}
                            {/*        <span>{formErrors['password']}</span>*/}
                            {/*    </div>*/}

                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="repeat_password" type="password" placeholder="Repeat Password"*/}
                            {/*               onChange={(e) => setRepeatPassword(e.target.value)} value={repeat_password}*/}
                            {/*               data-required/>*/}
                            {/*        <span>{formErrors['repeat_password']}</span>*/}
                            {/*    </div>*/}


                            {/*    <div className="form-item box-item">*/}
                            {/*        <input id="phone_number" type="number" placeholder="Phone Number"*/}
                            {/*               onChange={(e) => setPhoneNumber(e.target.value)} value={phone_number}*/}
                            {/*               data-required/>*/}
                            {/*        <span>{formErrors['phone_number']}</span>*/}
                            {/*    </div>*/}

                            {/*    <div className="form-item box-item">*/}
                            {/*        <label>Choose Your Avatar</label><br></br><br></br>*/}
                            {/*        <input id="avatar" type="file" placeholder="Avatar" onChange={handleImage}/>*/}
                            {/*        <span>{formErrors['avatar']}</span>*/}

                            {/*    </div>*/}
                            {/*    <div className="form-item">*/}
                            {/*        <button className='submit'>Submit</button>*/}
                            {/*        <span className="err-9">{formErrors['detail']}</span>*/}
                            {/*    </div>*/}

                            {/*</form>*/}
                        </main>
                    </section>
                    <footer>
                        <h3>© Ansh, Armaan, Giancarlo </h3>
                    </footer>

                </div>
            </div>
        </APIContext.Provider>
    )
}

export default Enrollment;
