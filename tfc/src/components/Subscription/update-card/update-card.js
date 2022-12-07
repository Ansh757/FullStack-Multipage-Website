import React from 'react'
import './update-card.css'
import { useNavigate } from "react-router-dom"


const GetPlan = () => {
const navigate = useNavigate();
  return (
    <div className='update-card'>
        <header>
            </header>
            <div className="signup-container">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1 style={{color:"white"}}>Update Card</h1>
                            <div className="social-container">
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className='active'>
                                <label style={{color:"white", display:"block"}} id="isActiveMembership" name="isActiveMembership" > Membership Status </label>
                                <input for="isActiveMembership" type="checkbox" checked ></input>
                            </div>
                                <input type="text" placeholder="Enter Your Card Info"/>
                            <button className="add-btn" style={{margin:"2%"}} >Update Card Info</button>
                            {/* onClick={() => navigate('/main')} */}
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <img src="https://www.debt.com/wp-content/uploads/2019/06/Credit-card-background-shallow-DOF.jpg"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <footer>
                <h3>© Ansh, Armaan, Giancarlo </h3>
            </footer>
    </div>
  )
}

export default GetPlan