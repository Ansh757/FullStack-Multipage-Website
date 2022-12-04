import React from 'react';
import './style.css';


const Login = () => {
    return (
        <>
            <header>
            </header>
            <div className="signup-container">
                <div className="left-container">
                    <h1>
                        <i className="fas fa-solid fa-dumbbell"></i>
                        TFC
                    </h1>
                    <div className="puppy">
                        <img
                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png"/>
                    </div>
                </div>
                <div className="right-container">
                    <header>
                        <h1>Please Enter the Registeration Form</h1>
                        <div className="set">
                            <div className="pets-name">
                                <label htmlFor="pets-name">Username</label>
                                <input id="pets-name" placeholder="Pet's name" type="text"></input>
                            </div>
                            <div className="pets-photo">
                                <button id="pets-upload">
                                    <i className="fas fa-camera-retro"></i>
                                </button>
                                <label htmlFor="pets-upload">Upload a photo</label>
                            </div>
                        </div>
                        <div className="set">
                            <div className="pets-breed">
                                <label htmlFor="pets-breed">Breed</label>
                                <input id="pets-breed" placeholder="Pet's breed" type="text"></input>
                            </div>
                            <div className="pets-birthday">
                                <label htmlFor="pets-birthday">Birthday</label>
                                <input id="pets-birthday" placeholder="MM/DD/YYYY" type="text"></input>
                            </div>
                        </div>
                        <div className="set">
                            <div className="pets-gender">
                                <label htmlFor="pet-gender-female">Gender</label>
                                <div className="radio-container">
                                    <input id="pet-gender-female" name="pet-gender" type="radio" value="female"></input>
                                    <label htmlFor="pet-gender-female">Female</label>
                                    <input id="pet-gender-male" name="pet-gender" type="radio" value="male"></input>
                                    <label htmlFor="pet-gender-male">Male</label>
                                </div>
                            </div>
                            <div className="pets-spayed-neutered">
                                <label htmlFor="pet-spayed">Spayed or Neutered</label>
                                <div className="radio-container">
                                    <input id="pet-spayed" name="spayed-neutered" type="radio" value="spayed"></input>
                                    <label htmlFor="pet-spayed">Spayed</label>
                                    <input id="pet-neutered" name="spayed-neutered" type="radio"
                                           value="neutered"></input>
                                    <label htmlFor="pet-neutered">Neutered</label>
                                </div>
                            </div>
                        </div>
                        <div className="pets-weight">
                            <label htmlFor="pet-weight-0-25">Weight</label>
                            <div className="radio-container">
                                <input id="pet-weight-0-25" name="pet-weight" type="radio" value="0-25"></input>
                                <label htmlFor="pet-weight-0-25">0-25 lbs</label>
                                <input id="pet-weight-25-50" name="pet-weight" type="radio" value="25-50"></input>
                                <label htmlFor="pet-weight-25-50">25-50 lbs</label>
                                <input id="pet-weight-50-100" name="pet-weight" type="radio" value="50-100"></input>
                                <label htmlFor="pet-weight-50-100">50-100 lbs</label>
                                <input id="pet-weight-100-plus" name="pet-weight" type="radio" value="100+"></input>
                                <label htmlFor="pet-weight-100-plus">100+ lbs</label>
                            </div>
                        </div>
                    </header>
                    <footer>
                        <div className="set">
                            <button id="back">Back</button>
                            <button id="next">Next</button>
                        </div>
                    </footer>
                </div>
            </div>
            <footer>
            </footer>
        </>
    )
}

export default Login;
