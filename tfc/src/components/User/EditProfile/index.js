import React, {Component, useState, useEffect, useRef, useReducer, useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import '../EditProfile/style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import APIContextUser from "../../../Contexts/APIContextUser";


// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp

const EditProfile = () => {
    const {id} = useParams();
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [repeat_password, setRepeatPassword] = useState("")
    const [phone_number, setPhoneNumber] = useState("")
    const { data } = useContext(APIContextUser);
    const { setData } = useContext(APIContextUser);

    const get_url = `http://127.0.0.1:8000/accounts/profile/${id}/`

    useEffect(() => {
        axios({
            method: "get",
            url: get_url,
            headers: {
                Authorization: localStorage.getItem('SavedToken'),
                "Content-Type": "multipart/form-data"
            }
        })
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

    const submitForm = async(e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('avatar', avatar)
        formData.append('username', username)
        formData.append('first_name', first_name)
        formData.append('last_name', last_name)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('repeat_password', repeat_password)
        formData.append('phone_number', phone_number)

        const url = `http://127.0.0.1:8000/accounts/${id}/profile/edit/`;
        const obj1 = { "username": username,
            "password": password,
            "first_name": first_name, "last_name": last_name,
            "email": email, "repeat_password": repeat_password,
            "phone_number": phone_number, "avatar": avatar
        }
        axios({
            method: "put",
            url: url,
            data: formData,
            headers: {Authorization: localStorage.getItem('SavedToken'),
                "Content-Type": "multipart/form-data"
                },

        })
            .then(response => {
                setData(obj1)
                handleErrors(response)
            })
            .catch(err => my_function(err.response.data));
    }

    const [formErrors, setFormErrors] = useState({});
    const noErrors = useRef(false);

    const handleImage = (e) => {
        setAvatar(e.target.files[0])
    }

    function my_function(e) {
        let keys = Object.keys(e)
        console.log("my_func", e)
        get_errors2(keys, e)
    }

    function handleErrors(response){
        console.log(response)
        setFormErrors({})
        navigate(
            '/main'
        )
    }


    function get_errors2(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            errors[k] = data[k]
        }
        console.log(errors)
        setFormErrors(errors);
        return errors
    }

    const navigate = useNavigate();

    return (
        <APIContextUser.Provider>
        <div className='register'>
            <div className="row-99">
                <section className="section">
                    <header>
                        <h3>Edit Profile</h3>
                        <h4>Please edit your information below</h4>
                    </header>
                    <main>
                        <form onSubmit={(e) => submitForm(e)}>
                            <div  className="form-item-99 box-item-99">
                                <input id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} data-required/>
                                <span>{formErrors['username']}</span>
                            </div>
                            <div className="form-item-99 box-item-99">
                                <input id="first_name" type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" value={first_name} data-required/>
                                <span>{formErrors['first_name']}</span>
                            </div>

                            <div className="form-item-99 box-item-99">
                                <input id="last_name" type="text" name="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" value={last_name} data-required/>
                                <span>{formErrors['last_name']}</span>
                            </div>
                            <div className="form-item-99 box-item-99">
                                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} data-email data-required/>
                                <span>{formErrors['email']}</span>
                            </div>
                            <div className="form-item-99 box-item-99">
                                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"
                                       data-required/>
                                <span>{formErrors['password']}</span>
                            </div>

                            <div className="form-item-99 box-item-99">
                                <input id="repeat_password" type="password"  placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} value={repeat_password} data-required/>
                                <span>{formErrors['repeat_password']}</span>
                            </div>


                            <div className="form-item-99 box-item-99">
                                <input id="phone_number" type="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phone_number} data-required/>
                                <span>{formErrors['phone_number']}</span>
                            </div>

                            <div className="form-item-99 box-item-99">
                                <label>Choose Your Avatar</label><br></br><br></br>
                                <input id="avatar" type="file" placeholder="Avatar" onChange={handleImage}/>
                                <span>{formErrors['avatar']}</span>

                            </div>
                            <div className="form-item-99">
                                <button className='submit'>Submit</button>
                                <span className="err-9">{formErrors['detail']}</span>
                            </div>

                        </form>
                    </main>
                    <footer>
                        <p>Changed your mind? <Link to="/main">Back To Home</Link></p>
                    </footer>
                    <i class="wave"></i>
                </section>
            </div>
        </div>
        </APIContextUser.Provider>
    )
}


export default EditProfile;
