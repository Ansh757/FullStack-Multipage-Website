import React, {useRef, useState, useEffect} from 'react'
import './update-plan.css'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios";

const UpdatePlan = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [membership_type, setPlan] = useState("")
    // const  = useRef(true)
    useEffect(() => {
        if (!localStorage.getItem('SavedToken')) {
            navigate('/login');
        } 
    }, [localStorage.getItem('SavedToken')])

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('membership_type', membership_type)

        const url = 'http://127.0.0.1:8000/subscriptions/' + id + '/plans/update-plan/';
        axios({
            method: "put",
            url: url,
            data: formData,
            headers: { Authorization:localStorage.getItem('SavedToken'), "Content-Type": "multipart/form-data"},
        })
            .then(res => handleErrors(res))
            .catch(err => my_function(err.response.data))
            // .then(response => handleErrors(response))
            // .catch(err => my_function(err.response.data));
    }

    const [formErrors, setFormErrors] = useState({});

    const noErrors = useRef(false);

    const handleMem = () => {
        // isActiveMembership.current = !!e.target.value;
        // console.log(isActiveMembership)
        // setIsActiveMembership(false)
        // console.log(setIsActiveMembership)
        // console.log(setIsActiveMembership)
        //
        // console.log(fields)
    };

    function my_function(e) {
        console.log(e)
        let keys = Object.keys(e)
        get_errors2(keys, e)
    }

    function handleErrors(response){
        setFormErrors({})
        console.log(response)
        let k = Object.keys(response.data)
        console.log(k)
        if (k) {
            // console.log(response.data)
            noErrors.current = true
            // setNoErrors(true)
            console.log("1")
            if (noErrors) {
                console.log("2")
                navigate('/main')
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
            // console.log("key is", k)
            errors[k] = data[k]
        }
        setFormErrors(errors);
        return errors
    }

    function get_errors(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            // console.log("key is", k)
            errors[k] = data[k][0]
        }
        setFormErrors(errors);
        return errors
    }
  return (
    <div className='update-plan'>
        <header>
        <div className="website-logo">
                    <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="menuItems">
                            <li><a href='/main' data-item='Home'>Home</a></li>
                            <li><a href={'/' + id + '/classes/all'} data-item='Classes'>Classes</a></li>
                            <li><a href={'/' + id + '/studios'} data-item='Studios'>Studios</a></li>
                            <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                        </ul>
                    </nav>
                </div>
            <div className="user-logo">
                <Link to={"/" + id + "/profile/"}>
                    <button className="user-btn">
                        <i className="fa-solid fa-user too"></i>
                    </button>
                </Link>
                <button id="icons" className="user-btn" onClick={() => {
                    localStorage.removeItem('SavedToken')
                    window.location.reload()
                }
                }>
                    <i id="icons" className="fa-solid fa-right-from-bracket too"></i>
                </button>
            </div>
            </header>
            <div className="signup-container">
                <div className="container" id="container">
                    <div className="form-container sign-in-container">
                        <form onSubmit={submitForm}>
                            <h1 style={{color:"white"}}>Change Plan</h1>
                            <div className="social-container">
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="tfc/src/components/Subscription/update-plan/update-plan" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <select id="Plans" name="Plans" onChange={(e) => setPlan(e.target.value)}>
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

export default UpdatePlan