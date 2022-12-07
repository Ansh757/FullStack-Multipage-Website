import React, {useRef, useState} from 'react';
import './style.css';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Axios from 'axios';

const Login = () => {

    const [data, setData] = useState({
        Username: "",
        Password: ""
    })

    const [formErrors, setFormErrors] = useState({});
    const noErrors = useRef(false);

    function RegistrationForm(e) {
        const fields={...data}
        fields[e.target.id] = e.target.value
        setData(fields)
        // console.log(fields)
    }

    function submitForm(e) {
        const url = "http://127.0.0.1:8000/accounts/token/";
        e.preventDefault();
        Axios.post(url, {
            password: data.Password,
            username: data.Username
        })
            .then(response => handleErrors(response))
            .catch(err => my_function(err.response.data))
    }

    function my_function(e) {
        console.log(e)
        let keys = Object.keys(e)
        get_errors2(keys, e)
        // Object.keys(e).forEach(key => console.log(key))
    }

    function handleErrors(response){
        setFormErrors({})
        let k = Object.keys(response.data)
        console.log(k)
        if (k.includes('response')) {
            console.log(response.data)
            noErrors.current = true
        } else {
            get_errors(k, response.data)
        }

        if (noErrors) {
            navigate('/main')
        }
    }

    function get_errors2(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            errors[k] = data[k]
        }
        setFormErrors(errors);
        return errors
    }

    function get_errors(keys, data){
        let errors = {}
        for (let i = 0; i < keys.length; i++){
            let k = keys[i]
            errors[k] = data[k][0]
        }
        setFormErrors(errors);
        return errors
    }

    const FileChange = e => {
        console.log(e.target.files[0].name);
        console.log(e.target.files[0]);
    };

    // function useRedirectCheck() {
    //     console.log("noo", noErrors)
    //     useEffect(() => {
    //         console.log("sdsd", noErrors)
    //         if (noErrors) {
    //             navigate("/login");
    //         }
    //     }, [noErrors]);
    // }
    const navigate = useNavigate();


    return (
        <div className='login'>
            <header>
            </header>
            <div className="signup-container">
                <div className="container" id="container">
                    <div className="form-container sign-up-container">
                        <form action="#">
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span>
                            <input type="text" placeholder="Username"/>
                            <input type="password" placeholder="Password"/>
                            <button>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={(e) => submitForm(e)}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span>
                            <input id="Username" value={data.Username} onChange={(e) => RegistrationForm(e)} type="text" placeholder="Username"/>
                            <span className="err"> {formErrors.username}</span>
                            <input id="Password" value={data.Password} onChange={(e) => RegistrationForm(e)} type="password" placeholder="Password"/>
                            <span className="err"> {formErrors.password}</span>
                            <a href="#">Forgot your password?</a>
                            <span className="err err-3"> {formErrors['detail']}</span>

                            <button>Sign In</button>
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
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={() => navigate('/register')}>Sign Up</button>
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

export default Login;
