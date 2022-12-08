import React from 'react';
import './style.css';
import 'react-bootstrap'
// Reference: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const Profile = () => {
    return (
        <div className='profile'>
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

            <div className="container22">
                <div className="container rounded bg-white mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-3 border-right">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                                className="rounded-circle mt-5" width="150px"
                                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span
                                className="font-weight-bold">username</span>
                                <span
                                className="text-black-50">email address</span>
                                <span>
                                </span></div>
                        </div>
                        <div className="col-md-5 border-right">
                            <div className="p-3 py-5">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h4 className="text-right">Profile Settings</h4>
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">First Name</label><input type="text"
                                                                                                           className="form-control"
                                                                                                           placeholder="first name"
                                                                                                           value=""/>
                                    </div>
                                    <div className="col-md-6"><label className="labels">Last Name</label><input
                                        type="text" className="form-control" value="" placeholder="last name"/></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Username</label><input
                                        type="text" className="form-control" placeholder="Username" value=""/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Phone Number</label><input
                                        type="text" className="form-control" placeholder="enter phone number" value=""/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Email</label><input
                                        type="email" className="form-control" placeholder="enter email address" value=""/>
                                    </div>
                                    <div className="col-md-12"><label className="labels">Password</label><input
                                        type="password" className="form-control" placeholder="enter new password"
                                        value=""/></div>
                                    <div className="col-md-12"><label className="labels">Repeat Password</label><input
                                        type="password" className="form-control" placeholder="repeat new password"
                                        value=""/></div>

                                    <div className="col-md-12"><label className="labels">Avatar</label><input
                                        type="file" className="form-control" value=""/></div>
                                </div>
                                <div className="mt-5 text-center">
                                    <button className="btn btn-primary profile-button" type="button">Save Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-md-4">*/}
                        {/*    <div className="p-3 py-5">*/}
                        {/*        <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span*/}
                        {/*            className="border px-3 p-1 add-experience"><i*/}
                        {/*            className="fa fa-plus"></i>&nbsp;Experience</span></div>*/}

                        {/*            <div className="col-md-12"><label className="labels">Experience in Designing</label><input*/}
                        {/*                type="text" className="form-control" placeholder="experience" value=""/></div>*/}
                        {/*                <div className="col-md-12"><label className="labels">Additional*/}
                        {/*                    Details</label><input type="text" className="form-control"*/}
                        {/*                                          placeholder="additional details" value=""/></div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>

            <footer>
                <h3>© Ansh, Armaan, Giancarlo </h3>
            </footer>
        </div>
    )
}

export default Profile;
