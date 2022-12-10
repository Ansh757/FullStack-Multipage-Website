import React, {useRef, useState, useEffect} from 'react'
import './update-card.css'
import {Link, useNavigate, useParams} from "react-router-dom"
import axios from "axios";

const UpdateCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [card_info, setCardInfo] = useState("")
    const [isActiveMembership, setIsActiveMembership] = useState(true)
    // const isActiveMembership = useRef(true)
    
    useEffect(() => {
        if (!localStorage.getItem('SavedToken')) {
            navigate('/login');
        } 
    }, [localStorage.getItem('SavedToken')])

    const submitForm = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('card_info', card_info)
        formData.append('isActiveMembership', isActiveMembership)

        const url = 'http://127.0.0.1:8000/subscriptions/' + id + '/plans/update-card/';
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
        setIsActiveMembership(!isActiveMembership)
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
    <div className='update-card'>
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
                            <h1 style={{color:"white"}}>Update Card</h1>
                            <div className="social-container">
                                <a href="tfc/src/components/Subscription/update-card/update-card" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="tfc/src/components/Subscription/update-card/update-card" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="tfc/src/components/Subscription/update-card/update-card" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <div className='active'>
                                <label style={{color:"white", display:"block"}} id="isActiveMembership" > Delete Membership </label>
                                <input id="isActiveMembership" onChange={handleMem} for="isActiveMembership" type="checkbox" value={isActiveMembership} ></input>
                            </div>
                                <input onChange={(e) => setCardInfo(e.target.value)} id="card_info" type="text" placeholder="Enter Your Card Info" checked={isActiveMembership}/>
                            <span className="err err-3"> {formErrors[0]}</span>
                            <button className="add-btn" style={{margin:"2%"}}>Update Card Info</button>
                            
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

export default UpdateCard;