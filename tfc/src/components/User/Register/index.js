import React, { Component, useState, setState } from 'react';
import './style.css';
import FileUploadButton from '../Register/FileUploadButton'

// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp



const Register = () => {
//     const [Username, setUsername] = useState(null);
//     const [FirstName, setFirstName] = useState(null);
//     const [LastName, setLastName] = useState(null);
//     const [Email, setEmail] = useState(null);
//     const [Password, setPassword] = useState(null);
//     const [PhoneNumber, setPhoneNumber] = useState(null);
//     const [RepeatPassword, setRepeatPassword] = useState(null);
//     const [Avatar, setAvatar] = useState(null);

//     function RegistrationForm() {
//         const handleValues = (e) => {
//             const {id, value} = e.target;
//             if (id === "FirstName") {
//                 setFirstName(value)
//             }
//             if (id === "Username") {
//                 setUsername(value)
//             }
//             if (id === "LastName") {
//                 setLastName(value)
//             }
//             if (id === "Email") {
//                 setEmail(value)
//             }
//             if (id === "Password") {
//                 setPassword(value)
//             }
//             if (id === "PhoneNumber") {
//                 setPhoneNumber(value)
//             }
//             if (id === "Avatar") {
//                 setAvatar(value)
//             }
//             if (id === "RepeatPassword") {
//                 setRepeatPassword(value)
//             }

//         }
//     }

    return (
    <div className='register'>
        <div class="row">
  <section class="section">
    <header>
      <h3>Register</h3>
      <h4>Please fill your information below</h4>
    </header>
    <main>
      <form>
        <div class="form-item box-item">
          <input type="text" name="name" placeholder="Username" data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="email" placeholder="First Name" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="email" placeholder="Last Name" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="email" name="email" placeholder="Email" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorEmail"><i class="fa fa-asterisk" aria-hidden="true"></i> email is not valid</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="email" placeholder="Password" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        <div class="form-item box-item">
          <input type="text" name="email" placeholder="Repeat Password" data-email data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>

        
        <div class="form-item box-item">
          <input type="number" name="address" placeholder="Phone Number" data-required/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
        </div>
        
        <div class="form-item box-item">
            <label>Choose Your Avatar</label><br></br><br></br>
          <input type="file" name="phone" placeholder="Avatar" data-required data-number data-count="10"/>
          <small class="errorReq"><i class="fa fa-asterisk" aria-hidden="true"></i> required field</small>
          <small class="errorNum"><i class="fa fa-asterisk" aria-hidden="true"></i> must be a number</small>
          <small class="errorChar"><i class="fa fa-asterisk" aria-hidden="true"></i> must be 10 digits</small>
        </div>
        <div class="form-item">
          <span id="submit" class="submit">Submit</span>
        </div>
      </form>
    </main>
    <footer>
      <p>Already have an account? <a href="#">Login here</a></p>
    </footer>
    <i class="wave"></i>
  </section>
</div>
        {/* <header>aasd</header>
    <div class="container-1">
        <header>Registration</header>

        <form action="#">
            <div class="form first">
                <div class="details personal">
                    <span class="title">Personal Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Username</label>
                            <input type="text" placeholder="Enter your username" required></input>
                        </div>

                        <div class="input-field">
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your First Name" required/>
                        </div>

                        <div class="input-field">
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your Last Name" required/>
                        </div>

                        <div class="input-field">
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" required/>
                        </div>

                        <div class="input-field">
                            <label>Password</label>
                            <input type="password" placeholder="Enter your Password" required/>
                        </div>

                        <div class="input-field">
                            <label>Phone Number</label>
                            <input type="number" placeholder="Enter your phone number" required/>
                        </div>

                        <div class="input-field">
                            <label>Repeat Password</label>
                            <input type="password" placeholder="Enter your Repeat Password" required/>
                        </div>

                        <div class="input-field-2">
                            <label>Avatar</label>
                            <input type="file" required/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="form second">
                <div class="details address">
                    <span class="title">Address Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Address Type</label>
                            <input type="text" placeholder="Permanent or Temporary" required/>
                        </div>

                        <div class="input-field">
                            <label>Nationality</label>
                            <input type="text" placeholder="Enter nationality" required/>
                        </div>

                        <div class="input-field">
                            <label>State</label>
                            <input type="text" placeholder="Enter your state" required/>
                        </div>

                        <div class="input-field">
                            <label>District</label>
                            <input type="text" placeholder="Enter your district" required/>
                        </div>

                        <div class="input-field">
                            <label>Block Number</label>
                            <input type="number" placeholder="Enter block number" required/>
                        </div>

                        <div class="input-field">
                            <label>Ward Number</label>
                            <input type="number" placeholder="Enter ward number" required/>
                        </div>
                    </div>
                </div>

                <div class="details family">
                    <span class="title">Family Details</span>

                    <div class="fields">
                        <div class="input-field">
                            <label>Father Name</label>
                            <input type="text" placeholder="Enter father name" required/>
                        </div>

                        <div class="input-field">
                            <label>Mother Name</label>
                            <input type="text" placeholder="Enter mother name" required/>
                        </div>

                        <div class="input-field">
                            <label>Grandfather</label>
                            <input type="text" placeholder="Enter grandfther name" required/>
                        </div>

                        <div class="input-field">
                            <label>Spouse Name</label>
                            <input type="text" placeholder="Enter spouse name" required/>
                        </div>

                        <div class="input-field">
                            <label>Father in Law</label>
                            <input type="text" placeholder="Father in law name" required/>
                        </div>

                        <div class="input-field">
                            <label>Mother in Law</label>
                            <input type="text" placeholder="Mother in law name" required/>
                        </div>
                    </div>

                    <div class="buttons">
                        <div class="backBtn">
                            <i class="uil uil-navigator"></i>
                            <span class="btnText">Back</span>
                        </div>
                        
                        <button class="sumbit">
                            <span class="btnText">Submit</span>
                            <i class="uil uil-navigator"></i>
                        </button>
                    </div>
                </div> 
            </div>
        </form>
        </div> */}
    </div>
    )
}


export default Register;
