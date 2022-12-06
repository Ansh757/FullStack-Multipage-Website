import React from 'react';
import './style.css';

// Reference: https://codepen.io/grohit/pen/jObGzdG
const User_Main = () => {
    return (
        <div className='user-main'>
            <header>
                <div className="website-logo">
                    <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                </div>
                <div className="navbar">
                    <nav>
                        <ul className="menuItems">
                            <li><a href='#' data-item='Home'>Home</a></li>
                            <li><a href='#' data-item='About'>About</a></li>
                            <li><a href='#' data-item='Projects'>Projects</a></li>
                            <li><a href='#' data-item='Blog'>Blog</a></li>
                            <li><a href='#' data-item='Contact'>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="user-logo">
                    <button className="user-btn">
                        <i className="fa-solid fa-user"></i>
                    </button>
                    <button className="user-btn">
                        <i className="fa-solid fa-right-from-bracket"></i>
                    </button>
                </div>

            </header>
            <div className="main-container">
                <div className="section section-1">
                    <h1>
                        Welcome <span> Bot1212</span> !
                    </h1>
                </div>
                <hr />
                <div className="section section-2">

                </div>
                <hr />
                <div className="section section-3">

                </div>
                {/*<div className="section section-4">*/}

                {/*</div>*/}
                <footer>
                    <h3>© Ansh, Armaan, Giancarlo </h3>
                </footer>
            </div>

        </div>
    )
}

export default User_Main;
