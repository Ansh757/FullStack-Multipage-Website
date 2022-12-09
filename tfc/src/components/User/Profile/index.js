import React, {Component, useState, createContext, useEffect} from 'react';
import './style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams, Link} from "react-router-dom";
// Reference: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
//
// const url = 'http://127.0.0.1:8000/accounts/profile/'


function Profile() {
    const {id} = useParams();
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhoneNumber] = useState("")

    const url = `http://127.0.0.1:8000/accounts/profile/${id}/`


        useEffect(() => {
            axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: localStorage.getItem('SavedToken')
                }
            })
                // .then(res => console.log(res))
            .then(res => handle(res.data))

        }, [])

        function handle(res) {
            setAvatar(res['avatar'])
            setUsername(res['username'])
            setFirstName(res['first_name'])
            setLastName(res['last_name'])
            setEmail(res['email'])
            setPhoneNumber(res['phone_number'])
        }

        return (
            <div className='profile'>
                <div className="card">
                    <div className="ds-top"></div>
                    <div className="avatar-holder">
                        <img src={avatar} alt="Albert Einstein"/>
                    </div>
                    <div className="name">
                        <a href="tfc/src/components/User/Profile/index"
                           target="_blank">{first_name + " " + last_name}</a>
                    </div>

                    <div className="ds-info">
                        <div className="ds pens">

                            <h6 title="Number of pens created by the user">Edit Profile
                                <Link to={"/" + id + "/edit"}>
                                    <button className="BUTTON">
                                        <i className="fa-solid fa-user-pen"></i>
                                    </button>

                                </Link>
                            </h6>
                        </div>
                    </div>
                    <div className="ds-skill">
                        <h6>Profile Data <i className="fa fa-code" aria-hidden="true"></i></h6>
                        <div className="skill html">
                            <h6><i className="fa-solid fa-user-check" style={{color: 'pink'}}></i> USERNAME: {username}
                            </h6>
                            <div className="bar bar-html">
                                <p>100%</p>
                            </div>
                        </div>
                        <div className="skill css">
                            <h6><i className="fa-solid fa-signature" style={{color: 'pink'}}></i> FIRST
                                NAME: {first_name}  </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill css">
                            <h6><i className="fa-solid fa-signature" style={{color: 'pink'}}></i> LAST NAME: {last_name}
                            </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill css">
                            <h6><i className="fa-solid fa-phone" style={{color: 'pink'}}></i> PHONE
                                NUMBER: {phone_number}  </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill javascript">
                            <h6><i className="fa-solid fa-envelope" style={{color: 'pink'}}></i> EMAIL: {email} </h6>
                            <div className="bar bar-js">
                                <p>75%</p>
                            </div>
                        </div>

                        {/*<div className="skill javascript">*/}
                        {/*    <h6><i className="fa-solid fa-lock" style={{color:'pink'}} ></i> PASSWORD: mypassword </h6>*/}
                        {/*    <div className="bar bar-js">*/}
                        {/*        <p>75%</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                </div>
            </div>
        );
}
export default Profile;
// function Profile() {
//     const {id} = useParams();
//
//     const [username, setUsername] = useState("")
//     const [first_name, setFirstName] = useState("")
//     const [last_name, setLastName] = useState("")
//     const [avatar, setAvatar] = useState("")
//     const [email, setEmail] = useState("")
//     const [phone_number, setPhoneNumber] = useState("")
//
//     // axios.get()
//     return (
//             <h1>id<h1>{" "}
//
//     )
// }
// export default Profile;