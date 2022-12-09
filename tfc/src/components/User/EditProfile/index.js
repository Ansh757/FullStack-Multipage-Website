import React, { Component, useState, useEffect, useRef } from 'react';
import {Link, useParams} from "react-router-dom";
import './style.css';
import axios from 'axios';
// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp
import { useNavigate } from "react-router-dom"


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

    const get_url = `http://127.0.0.1:8000/accounts/profile/${id}/`

    useEffect(() => {
        axios({
            method: "get",
            url: get_url,
            headers: {
                Authorization: localStorage.getItem('SavedToken')
            }
        })
            // .then(res => console.log(res))
            .then(res => handle(res.data))

    }, [])

    function handle(res) {
        // setAvatar(res['avatar'])
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

        axios.put(url, {
            data: formData,
        headers: {Authorization: localStorage.getItem('SavedToken'),
                "Content-Type": "multipart/form-data"},

        })
            // .then(res => console.log(res))
            // .catch(err => console.log(err))
            .then(response => handleErrors(response))
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
        setFormErrors({})
        console.log(response)
        let k = Object.keys(response.data)
        console.log("keys", k)
        if (k.includes('response')) {
            noErrors.current = true
            if (noErrors) {
                console.log("2")
                navigate('/home')
                noErrors.current = false
            }

        } else {
            get_errors(k, response.data)
        }
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

    function get_errors(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            errors[k] = data[k]
        }
        setFormErrors(errors);
        return errors
    }

    const navigate = useNavigate();

    return (
        <div className='register'>
            <div className="row">
                <section className="section">
                    <header>
                        <h3>Edit Profile</h3>
                        <h4>Please edit your information below</h4>
                    </header>
                    <main>
                        <form onSubmit={(e) => submitForm(e)}>
                            <div  className="form-item box-item">
                                <input id="username" type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                <span>{formErrors['username']}</span>
                            </div>
                            <div className="form-item box-item">
                                <input id="first_name" type="text" onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" value={first_name} data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                <span>{formErrors['first_name']}</span>
                            </div>

                            <div className="form-item box-item">
                                <input id="last_name" type="text" name="text" onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" value={last_name} data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                <span>{formErrors['last_name']}</span>
                            </div>
                            <div className="form-item box-item">
                                <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" value={email} data-email data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                {/*<small className="errorEmail"><i className="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>*/}
                                <span>{formErrors['email']}</span>
                            </div>
                            <div className="form-item box-item">
                                <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"
                                       data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                <span>{formErrors['password']}</span>
                            </div>

                            <div className="form-item box-item">
                                <input id="repeat_password" type="password"  placeholder="Repeat Password" onChange={(e) => setRepeatPassword(e.target.value)} value={repeat_password} data-required/>
                                <span>{formErrors['repeat_password']}</span>
                            </div>


                            <div className="form-item box-item">
                                <input id="phone_number" type="number" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} value={phone_number} data-required/>
                                {/*<small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>*/}
                                <span>{formErrors['phone_number']}</span>
                            </div>

                            <div className="form-item box-item">
                                <label>Choose Your Avatar</label><br></br><br></br>
                                <input id="avatar" type="file" placeholder="Avatar" onChange={handleImage}/>
                                <span>{formErrors['avatar']}</span>

                            </div>
                            <div className="form-item">
                                <button className='submit'>Submit</button>
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
    )
}


export default EditProfile;


// import React, { Component, useState, useEffect, useRef } from 'react';
// import { Link } from "react-router-dom";
// import './style.css';
// import axios from 'axios';
// // Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp
// import { useNavigate, useParams } from "react-router-dom"
//
// const url = 'http://127.0.0.1:8000/accounts/profile/'

// export default function EditProfile() {
//     let navigate = useNavigate();
//     const {id} = useParams();
//     // const [data, ]
//     // const [data, setData] = useState({
//     //     username: "",
//     //     first_name: "",
//     //     last_name: "",
//     //     email: "",
//     //     password: "",
//     //     repeat_password: "",
//     //     avatar: "",
//     //     phone_number: ""
//     // })
//
//     const {username, first_name, last_name, email, password, repeat_password, avatar, phone_number} = data
//
//     const [formErrors, setFormErrors] = useState({});
//     const noErrors = useRef(false);
//
//     const EditForm = (e) => {
//         setData({...data, [e.target.id]: e.target.value});
//     };
//
//     // useEffect(() => {
//     //         load_user_data()
//     //     }, []
//     // )
//     //
//     // const load_user_data = async () => {
//     //     axios.get('http://127.0.0.1:8000/accounts/profile/' + id + "/", {
//     //         headers: {
//     //             Authorization: localStorage.getItem('SavedToken'),
//     //             'Content-Type': 'application/json'
//     //         }
//     //     }) .then(res => setData(res.data))
//     // }
//
//
//
//     const submitForm = async (e) => {
//         // e.preventDefault();
//         // axios.put(url, data, {
//         //     headers: {
//         //         Authorization: localStorage.getItem('SavedToken'),
//         //         'Content-Type': 'multipart/form-data'
//         //     }
//         //         .then(response => handleErrors(response))
//         //         .catch(err => my_function(err.response.data))
//         // })
//         //
//         // function my_function(e) {
//         //     let keys = Object.keys(e)
//         //     get_errors2(keys, e)
//         // }
//         //
//         // function handleErrors(response) {
//         //     setFormErrors({})
//         //
//         //     let k = Object.keys(response.data)
//         //     if (k.includes('response')) {
//         //         console.log(response.data)
//         //         noErrors.current = true
//         //         // setNoErrors(true)
//         //         console.log("1")
//         //         if (noErrors) {
//         //             console.log("2")
//         //             navigate('/main')
//         //             noErrors.current = false
//         //         }
//         //
//         //     } else {
//         //         get_errors(k, response.data)
//         //     }
//         // }
//         //
//         //
//         // function get_errors2(keys, data) {
//         //     let errors = {}
//         //     for (let i = 0; i < keys.length; i++) {
//         //         let k = keys[i]
//         //         errors[k] = data[k]
//         //     }
//         //     setFormErrors(errors);
//         //     return errors
//         // }
//         //
//         // function get_errors(keys, data) {
//         //     let errors = {}
//         //     for (let i = 0; i < keys.length; i++) {
//         //         let k = keys[i]
//         //         errors[k] = data[k][0]
//         //     }
//         //     setFormErrors(errors);
//         //     return errors
//         // }
//
//         return (
//             <div className='edit-profile'>
//                 <div className="row">
//                     <section className="section">
//                         <header>
//                             <h3>Edit Profile</h3>
//                             <h4>Please fill the fields you want to change</h4>
//                         </header>
//                         <main>
//                             <form onSubmit={(e) => submitForm(e)}>
//                                 <div className="form-item box-item">
//                                     <input id="username" type="text" placeholder="Username"
//                                            onChange={(e) => EditForm(e)} value={username} data-required/>
//
//                                     <span>{formErrors['username']}</span>
//                                 </div>
//                                 <div className="form-item box-item">
//                                     <input id="first_name" type="text" onChange={(e) => EditForm(e)}
//                                            placeholder="First Name" value={first_name} data-required/>
//
//                                     <span>{formErrors['first_name']}</span>
//                                 </div>
//
//                                 <div className="form-item box-item">
//                                     <input id="last_name" type="text" name="text" onChange={(e) => EditForm(e)}
//                                            placeholder="Last Name" value={last_name} data-required/>
//                                     <span>{formErrors['last_name']}</span>
//                                 </div>
//                                 <div className="form-item box-item">
//                                     <input id="email" type="email" onChange={(e) => EditForm(e)} placeholder="Email"
//                                            value={email} data-email data-required/>
//                                     <span>{formErrors['email']}</span>
//                                 </div>
//                                 <div className="form-item box-item">
//                                     <input id="password" type="password" onChange={(e) => EditForm(e)}
//                                            value={password} placeholder="Password"
//                                            data-required/>
//                                     <span>{formErrors['password']}</span>
//                                 </div>
//
//                                 <div className="form-item box-item">
//                                     <input id="repeat_password" type="password" placeholder="Repeat Password"
//                                            onChange={(e) => EditForm(e)} value={data.repeat_password} data-required/>
//                                     <span>{formErrors['repeat_password']}</span>
//                                 </div>
//
//
//                                 <div className="form-item box-item">
//                                     <input id="phone_number" type="number" placeholder="Phone Number"
//                                            onChange={(e) => EditForm(e)} value={data.phone_number} data-required/>
//                                     <span>{formErrors['phone_number']}</span>
//                                 </div>
//
//                                 <div className="form-item box-item">
//                                     <label>Choose Your Avatar</label><br></br><br></br>
//                                     <input id="avatar" type="file" placeholder="Avatar" onChange={(e) => EditForm(e)}
//                                            data-required data-number data-count="10"/>
//                                     <span>{formErrors['avatar']}</span>
//                                 </div>
//                                 <div className="form-item">
//                                     <button className='submit'>Submit</button>
//                                 </div>
//                             </form>
//                         </main>
//                         <footer>
//                             <p>Already have an account? <Link to="/login">Sign In</Link></p>
//                         </footer>
//                         <i class="wave"></i>
//                     </section>
//                 </div>
//             </div>
//         )
//     }
// }
//
