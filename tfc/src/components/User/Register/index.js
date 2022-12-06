import React, { Component, useState, setState } from 'react';
import './style.css';
import FileUploadButton from '../Register/FileUploadButton'
// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp



const Register = () => {
    const [Username, setUsername] = useState(null);
    const [FirstName, setFirstName] = useState(null);
    const [LastName, setLastName] = useState(null);
    const [Email, setEmail] = useState(null);
    const [Password, setPassword] = useState(null);
    const [PhoneNumber, setPhoneNumber] = useState(null);
    const [RepeatPassword, setRepeatPassword] = useState(null);
    const [Avatar, setAvatar] = useState(null);

    function RegistrationForm() {
        const handleValues = (e) => {
            const {id, value} = e.target;
            if (id === "FirstName") {
                setFirstName(value)
            }
            if (id === "Username") {
                setUsername(value)
            }
            if (id === "LastName") {
                setLastName(value)
            }
            if (id === "Email") {
                setEmail(value)
            }
            if (id === "Password") {
                setPassword(value)
            }
            if (id === "PhoneNumber") {
                setPhoneNumber(value)
            }
            if (id === "Avatar") {
                setAvatar(value)
            }
            if (id === "RepeatPassword") {
                setRepeatPassword(value)
            }

        }
    }

    return (
        <div className='register'>
            <header>
            </header>
            <div className="signup-container">
                <div className="left-container">
                    {/*<i></i>*/}
                    <i className="fa-solid fa-dumbbell"></i>
                    <h1>TFC</h1>
                </div>
                <div className="right-container">
                    <h1> Please Register </h1>
                    <h1 className="title-2"> To Get Started </h1>
                    <div className="register-form">
                        <div className="user-username">
                            <label className="Username"> Username </label>
                            <input id="Username" type="text" placeholder="Username" value={Username} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                        <div className="user-avatar">
                            <FileUploadButton/>
                            {/*<button id="Avatar" >*/}
                            {/*    <input type="file" className="file-input" />*/}
                            {/*    <i className="fas fa-camera-retro"> </i>*/}
                            {/*</button>*/}
                            <label className="Avatar" htmlFor="file-input"> Avatar </label>
                            {/*<p>{this.state.selectedFileName}</p>*/}
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-first-name">
                            <label className="FirstName"> First Name </label>
                            <input id="FirstName" type="text" placeholder="First Name" value={FirstName} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                        <div className="user-last-name">
                            <label className="LastName"> Last Name </label>
                            <input id="LastName" type="text" placeholder="Last Name" value={LastName} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-email">
                            <label className="Email"> Email </label>
                            <input id="Email" type="email" placeholder="123@gmail.com" value={Email} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                        <div className="user-number">
                            <label className="PhoneNumber"> Phone Number </label>
                            <input id="PhoneNumber" type="text" placeholder="123-123-1234" value={PhoneNumber} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-password">
                            <label className="Password"> Password </label>
                            <input id="Password" type="password" value={Password} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                        <div className="user-password2">
                            <label className="RepeatPassword"> Repeat Password </label>
                            <input id="RepeatPassword" type="password" value={RepeatPassword} onChange = {(e) => RegistrationForm(e)} required/>
                        </div>
                    </div>
                    <div className="register-btn">
                        <button>
                            REGISTER
                        </button>
                    </div>

                </div>
            </div>
            <footer>
                <h3>© Name1, Name2, Name3 </h3>
            </footer>
        </div>
    )
}



export default Register;
