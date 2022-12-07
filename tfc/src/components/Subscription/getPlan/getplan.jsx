import React from 'react'
import './getplan.css'
import { useNavigate } from "react-router-dom"


const GetPlan = () => {
const navigate = useNavigate();
  return (
    <div className='getPlan'>
        <header>
            </header>
            <div className="signup-container">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1 style={{color:"white"}}>Add A Plan</h1>
                            <div className="social-container">
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="https://www.cs.toronto.edu/~kianoosh/courses/csc309/" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <select id="Plans" name="Plans">
                                <option value="15">Monthly Plan: $15/mo</option>
                                <option value="150">Annual Plan: $150/yr</option>
                                <option value="200">Premium Annual Plan: $200/yr</option>
                            </select>
                            <input type="text" placeholder="Enter Your Card Info"/>
                            <button className="add-btn" style={{margin:"2%"}} >Add Plan</button>
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
                                <img src='https://images.squarespace-cdn.com/content/v1/5750d5129f72662d66448028/1471724152585-9J4Q214U041EQYSN3SZN/Bicep+Curl+Barbell.jpg?format=1500w"'></img>
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