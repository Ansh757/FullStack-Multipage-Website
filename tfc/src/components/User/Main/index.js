import React from 'react';
import './main.css';

// Reference: https://codepen.io/rickyeckhardt/pen/oNXeoZp

const Base = () => {
    return (
        <>

            <header>
                <div className="buttons-div">

                    <button className="btn">
                        <span className="text"> SIGN UP </span>
                    </button>
                    <button className="btn">
                        <span className="text"> SIGN IN </span>
                    </button>
                </div>
            </header>

            <div className="main-page">
                    <div className="container">
                    <div className="title-div">
                        <h1 className="title"> <span className="welcome"> Welcome to </span> </h1>
                        <h1 className="title"> Toronto Fitness Club </h1>
                    </div>
                </div>

            </div>
            <footer>
            </footer>
        </>
    )
}

export default Base;
