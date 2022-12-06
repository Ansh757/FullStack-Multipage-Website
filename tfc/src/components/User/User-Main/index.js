import React from 'react';
import './style.css';
import func from './hours'
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
                            <li><a href='#' data-item='Classes'>Classes</a></li>
                            <li><a href='#' data-item='Studios'>Studios</a></li>
                            <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
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
                        Welcome <span> Bot1212</span>!
                    </h1>
                </div>
                <hr />
                <div className="section section-2">
                    <h1>
                        Timings
                    </h1>

                    <div className="opening-hours">
                        <div className="opening-hours-content section">
                            <div className="header">
                                <span id="open-status"><small className="openorclosed">We are</small></span>
                            </div>
                            <table className="opening-hours-table">
                                <tr id="Monday" itemProp="openingHours" title="Open Monday at 9am to 6pm">
                                    <td>Monday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Tuesday" itemProp="openingHours" title="Open Tuesday at 9am to 6pm">
                                    <td>Tuesday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Wednesday" itemProp="openingHours" title="Open Wednesday at 9am to 6pm">
                                    <td>Wednesday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Thursday" itemProp="openingHours" title="Open Thursday at 9am to 8pm">
                                    <td>Thursday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">20:00</td>
                                </tr>
                                <tr id="Friday" itemProp="openingHours" title="Open Friday at 9am to 6pm">
                                    <td>Friday</td>
                                    <td className="opens">09:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Saturday" itemProp="openingHours" title="Open Saturday at 10am to 6pm">
                                    <td>Saturday</td>
                                    <td className="opens">10:00</td>
                                    <td>-</td>
                                    <td className="closes">18:00</td>
                                </tr>
                                <tr id="Sunday" itemProp="openingHours" title="Open Sunday at 11am to 4pm">
                                    <td>Sunday</td>
                                    <td className="opens">11:00</td>
                                    <td>-</td>
                                    <td className="closes">16:00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
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
