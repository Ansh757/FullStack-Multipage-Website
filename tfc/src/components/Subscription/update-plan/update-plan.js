import React from 'react'
import './update-plan.css'
import { useNavigate } from "react-router-dom"


const GetPlan = () => {
const navigate = useNavigate();
  return (
    <div className='update-plan'>
        <header>
            </header>
            <div className="signup-container">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form action="tfc/src/components/Subscription/update-plan/update-plan#">
                            <h1 style={{color:"white"}}>Change Plan</h1>
                            <div className="social-container">
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <select id="Plans" name="Plans">
                                <option value="15">Monthly Plan: $15/mo</option>
                                <option value="150">Annual Plan: $150/yr</option>
                                <option value="200">Premium Annual Plan: $200/yr</option>
                            </select>
                            <button className="add-btn" style={{margin:"2%"}} >Change Plan</button>
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
                                <img src="https://i.pinimg.com/originals/20/46/5a/20465a2eb9d1aef97a928968ab7efa15.png"></img>
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