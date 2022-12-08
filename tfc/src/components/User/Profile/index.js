import React, {Component, useState, createContext} from 'react';
import './style.css';
import axios from "axios";
import { useNavigate } from "react-router-dom"
import {useParams} from "react-router-dom";
// Reference: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631

const url = 'http://127.0.0.1:8000/accounts/profile/'




function Profile() {
    const { id } = useParams();
    const [data, setData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        avatar: "",
        email: "",
        phone_number: ""
    })
    // const [username, setUsername] = useState("");
    // const [first_name, setFirstName] = useState("");
    // const [last_name, setLastName] = useState("");
    // const [avatar, setAvatar] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone_number, setPhoneNumber] = useState("");

    axios.get(url + id + "/", { headers: { Authorization:localStorage.getItem('SavedToken'), 'Content-Type': 'application/json'}})
        .then(res => handle(res.data))

    function handle(res){
        console.log(res)
        setData(res)
    }

    return (
        <div className='profile'>
            <div className="card">
                <div className="ds-top"></div>
                <div className="avatar-holder">
                    <img src={data.avatar} alt="Albert Einstein"/>
                </div>
                <div className="name">
                    <a href="tfc/src/components/User/Profile/index" target="_blank">{data.first_name + " " + data.last_name}</a>
                </div>

                <div className="ds-info">
                    <div className="ds pens">
                        <h6 title="Number of pens created by the user">Pens <i className="fas fa-edit"></i></h6>
                        <p>29</p>
                    </div>
                    <div className="ds projects">
                        <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
                        <p>0</p>
                    </div>
                    <div className="ds posts">
                        <h6 title="Number of posts">Posts <i className="fas fa-comments"></i></h6>
                        <p>0</p>
                    </div>
                </div>
                <div className="ds-skill">
                    <h6>Profile Data <i className="fa fa-code" aria-hidden="true"></i></h6>
                    <div className="skill html">
                        <h6><i class="fa-solid fa-user-check" style={{color:'pink'}}></i> USERNAME: {data.username} </h6>
                        <div className="bar bar-html">
                            <p>100%</p>
                        </div>
                    </div>
                    <div className="skill css">
                        <h6><i class="fa-solid fa-signature" style={{color:'pink'}}></i> FIRST NAME: {data.first_name}  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                    </div>

                    <div className="skill css">
                        <h6><i class="fa-solid fa-signature" style={{color:'pink'}}></i> LAST NAME: {data.last_name}  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                    </div>

                    <div className="skill css">
                        <h6><i class="fa-solid fa-phone"style={{color:'pink'}}></i> PHONE NUMBER: {data.phone_number}  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                    </div>

                    <div className="skill javascript">
                        <h6><i class="fa-solid fa-envelope" style={{color:'pink'}}></i> EMAIL: {data.email} </h6>
                        <div className="bar bar-js">
                            <p>75%</p>
                        </div>
                    </div>

                    <div className="skill javascript">
                        <h6><i class="fa-solid fa-lock" style={{color:'pink'}} ></i> PASSWORD: mypassword </h6>
                        <div className="bar bar-js">
                            <p>75%</p>
                        </div>
                    </div>

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