import React from 'react';
import './style.css';


const Register = () => {
    return (
        <>
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
                            <input id="Username" type="text" placeholder="Username" required/>
                        </div>
                        <div className="user-avatar">
                            <button id="Avatar">
                                <i className="fas fa-camera-retro"> </i>
                            </button>
                            <label className="Avatar"> Avatar </label>
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-first-name">
                            <label className="FirstName"> First Name </label>
                            <input id="FirstName" type="text" placeholder="First Name" required/>
                        </div>
                        <div className="user-last-name">
                            <label className="LastName"> Last Name </label>
                            <input id="LastName" type="text" placeholder="Last Name" required/>
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-email">
                            <label className="Email"> Email </label>
                            <input id="Email" type="email" placeholder="123@gmail.com" required/>
                        </div>
                        <div className="user-number">
                            <label className="PhoneNumber"> Phone Number </label>
                            <input id="PhoneNumber" type="text" placeholder="123-123-1234" required/>
                        </div>
                    </div>

                    <div className="register-form">
                        <div className="user-password">
                            <label className="Password"> Password </label>
                            <input id="Password" type="password" required/>
                        </div>
                        <div className="user-password2">
                            <label className="RepeatPassword"> Repeat Password </label>
                            <input id="RepeatPassword" type="password" required/>
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
        </>
    )
}

export default Register;
