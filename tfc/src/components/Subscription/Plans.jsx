import React, {Component, useState, createContext, useEffect} from 'react';
import './Plans.css'
import {plansTileData} from './plans-data/plan-tile-data'
import btick from './photos/whiteTick.png'
import {useNavigate, useParams, Link} from "react-router-dom"




const Plans = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('SavedToken')) {
        navigate('/login');
    } 
}, [localStorage.getItem('SavedToken')])
  
  return (
    <div className='plans-overlay'>
        
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
                <button className="user-btn" onClick={() => {
                    localStorage.removeItem('SavedToken')
                    window.location.reload()
                }
                }>
                    <i id="icons" className="fa-solid fa-right-from-bracket too"></i>
                </button>
            </div>

            </header>
    <div className='bag'>
        <div className='plan-header'>
            <span className='stroke-text'> START YOUR</span>
            <span > FITNESS JOURNEY WITH TFC </span>
            <span className='stroke-text'> STARTING NOW</span>
        </div>
        <div className='plan-tiles'>
            {plansTileData.map((plan, k) =>(
                <div className='plans' key={k}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>${plan.cost}</span>
                    
                    <div className='description'>
                        {plan.description.map((feature, i) => (
                            <div className='point'>
                                <img src={btick} alt=""/>
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>

                </div>
            
            ))}
        </div>
     </div> 

     <div className='btn-div'>
            <button className='join-button' onClick={() => navigate('/get-plan/' + id)}>JOIN NOW</button>
        </div>

            <footer>
                <h3 style={{color:"white"}}>© Ansh, Armaan, Giancarlo </h3>
            </footer>      
    </div>

  )
}

export default Plans