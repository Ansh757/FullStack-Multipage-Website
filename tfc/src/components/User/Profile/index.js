import React, {Component, useState, createContext, useEffect, useReducer, useContext} from 'react';
import '../Profile/style.css';
import axios from "axios"
import {useParams, Link} from "react-router-dom";
// Reference: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631

import APIContextUser, {useUserAPIContext} from "../../../Contexts/APIContextUser";

const Profile = () => {
    const { id } = useParams();
    const { data } = useContext(APIContextUser);
    const { setData } = useContext(APIContextUser);

    console.log({data})
    const url = `http://127.0.0.1:8000/accounts/profile/${id}/`

        useEffect(() => {
            axios({
                method: "get",
                url: url,
                headers: {
                    Authorization: localStorage.getItem('SavedToken')
                }
            })
                .then(res => {
                    setData(res.data)
                })
        }, [])

        return (
            <APIContextUser.Provider>
            <div className='profile'>
                <div className="card">
                    <div className="ds-top"></div>
                    <div className="avatar-holder">
                        <img src={data.avatar} alt="Albert Einstein"/>
                    </div>
                    <div className="name">
                        <a href="tfc/src/components/User/Profile/index"
                           target="_blank">{data.first_name + " " + data.last_name}</a>
                    </div>

                    <div className="ds-info">
                        <div className="ds pens">

                            <h6 title="Number of pens created by the user">Edit Profile
                                <Link to={"/" + id + "/edit"}>
                                    <button className="BUTTON">
                                        <i className="fa-solid fa-user-pen"></i>
                                    </button>

                                </Link>
                            </h6>
                        </div>
                    </div>
                    <div className="ds-skill">
                        <h6>Profile Data <i className="fa fa-code" aria-hidden="true"></i></h6>
                        <div className="skill html">
                            <h6><i className="fa-solid fa-user-check" style={{color: 'pink'}}></i> USERNAME: {data.username}
                            </h6>
                            <div className="bar bar-html">
                                <p>100%</p>
                            </div>
                        </div>
                        <div className="skill css">
                            <h6><i className="fa-solid fa-signature" style={{color: 'pink'}}></i> FIRST
                                NAME: {data.first_name}  </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill css">
                            <h6><i className="fa-solid fa-signature" style={{color: 'pink'}}></i> LAST NAME: {data.last_name}
                            </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill css">
                            <h6><i className="fa-solid fa-phone" style={{color: 'pink'}}></i> PHONE
                                NUMBER: {data.phone_number}  </h6>
                            <div className="bar bar-css">
                                <p>100%</p>
                            </div>
                        </div>

                        <div className="skill javascript">
                            <h6><i className="fa-solid fa-envelope" style={{color: 'pink'}}></i> EMAIL: {data.email} </h6>
                            <div className="bar bar-js">
                                <p>75%</p>
                            </div>
                        </div>
                        {/*<div className="skill javascript">*/}
                        {/*    <h6><i className="fa-solid fa-lock" style={{color:'pink'}} ></i> PASSWORD: {data.password} </h6>*/}
                        {/*    <div className="bar bar-js">*/}
                        {/*        <p>75%</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
            </APIContextUser.Provider>
        );
}
export default Profile;
