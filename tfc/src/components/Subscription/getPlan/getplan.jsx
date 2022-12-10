import React, {useRef, useState, useEffect} from 'react'
import './getplan.css'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios";



const GetPlan = () => {

    useEffect(() => {
        if (!localStorage.getItem('SavedToken')) {
            navigate('/login');
        } 
    }, [localStorage.getItem('SavedToken')])

    const {id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState({
        card_info: "",
        membership: ""
    })

    const [formErrors, setFormErrors] = useState({});

    const noErrors = useRef(false);

    function UpdateForm(e) {
        const fields={...data}
        fields[e.target.id] = e.target.value
        setData(fields)
        console.log(fields)
    }


    const submitForm = async(e) => {
        let obj1 = {
            membership_type: data.membership,
        }

        e.preventDefault();
        const url = "http://127.0.0.1:8000/subscriptions/plans/";
        axios.post(url, {
            card_info: data.card_info,
            membership: obj1
        }, { headers: { Authorization:localStorage.getItem('SavedToken'), 'Content-Type': 'application/json'}})
            .then(response => handleErrors(response))
            // .catch(err => console.log(err))
            .catch(err => my_function(err.response.data))
    }

    function my_function(e) {
        console.log(e)
        let keys = Object.keys(e)
        get_errors2(keys, e)
    }

    function handleErrors(response){
        setFormErrors({})
        console.log(response)
        let k = Object.keys(response.data)
        if (k.includes('response')) {
            console.log(response.data)
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
        // console.log("err", noErrors)
    }


    function get_errors2(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            console.log("key is", k)
            errors[k] = data[k]
        }
        setFormErrors(errors);
        return errors
    }

    function get_errors(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            console.log("key is", k)
            errors[k] = data[k][0]
        }
        setFormErrors(errors);
        return errors
    }


  return (
    <div className='getPlan'>
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
                    window.location.reload(false)
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
                            <h1 style={{color:"white"}}>Add A Plan</h1>
                            <div className="social-container">
                                <a href="tfc/src/components/Subscription/getPlan/getplan" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="tfc/src/components/Subscription/getPlan/getplan" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="tfc/src/components/Subscription/getPlan/getplan" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <select id="membership" name="Plans" value={data.membership} onChange={(e) => UpdateForm(e)} required>
                                <option value="">-------</option>
                                <option value="15">Monthly Plan: $15/mo</option>
                                <option value="150">Annual Plan: $150/yr</option>
                                <option value="200">Premium Annual Plan: $200/yr</option>
                            </select>
                            <input id="card_info" type="text" required value={ data.card_info } onChange={(e) => UpdateForm(e)} placeholder="Enter Your Card Info" />
                            <span className="err err-3"> {formErrors[0]}</span>
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