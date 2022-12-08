import React from 'react';
import './style.css';
import 'react-bootstrap'
// Reference: https://bbbootstrap.com/snippets/bootstrap-5-myprofile-90806631
const Profile = () => {
    return (
        <div className='profile'>
            <div className="card">
                <div className="ds-top"></div>
                <div className="avatar-holder">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1820405/profile/profile-512.jpg?1533058950" alt="Albert Einstein"/>
                </div>
                <div className="name">
                    <a href="https://codepen.io/AlbertFeynman/" target="_blank">Albert Feynman</a>
                </div>
                
                <div className="ds-info">
                    <div className="ds pens">
                    <h6 title="Number of pens created by the user">Pens <i className="fas fa-edit"></i></h6>
                    <p>29</p>
                    </div>
                    <div className="ds projects">
                    <h6 title="Number of projects created by the user">Projects <i className="fas fa-project-diagram"></i></h6>
                    <p>0</p>
                    </div>
                    <div className="ds posts">
                    <h6 title="Number of posts">Posts <i className="fas fa-comments"></i></h6>
                    <p>0</p>
                    </div>
                    </div>
                    <div className="ds-skill">
                        <h6>Profile Data <i className="fa fa-code" aria-hidden="true"></i></h6>
                        <div className="skill html">
                        <h6><i class="fa-solid fa-user-check" style={{color:'pink'}}></i> USERNAME: a-mann </h6>
                        <div className="bar bar-html">
                            <p>100%</p>
                        </div>
                        </div>
                        <div className="skill css">
                        <h6><i class="fa-solid fa-signature" style={{color:'pink'}}></i> FIRST NAME: Armaan  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                        </div>

                        <div className="skill css">
                        <h6><i class="fa-solid fa-signature" style={{color:'pink'}}></i> LAST NAME: Mann  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                        </div>

                        <div className="skill css">
                        <h6><i class="fa-solid fa-phone"style={{color:'pink'}}></i> PHONE NUMBER: 111-111-1111  </h6>
                        <div className="bar bar-css">
                            <p>100%</p>
                        </div>
                        </div>

                        <div className="skill javascript">
                        <h6><i class="fa-solid fa-envelope" style={{color:'pink'}}></i> EMAIL: a@mail.com </h6>
                        <div className="bar bar-js">
                            <p>75%</p>
                        </div>
                        </div>

                        <div className="skill javascript">
                        <h6><i class="fa-solid fa-lock" style={{color:'pink'}} ></i> PASSWORD: mypassword </h6>
                        <div className="bar bar-js">
                            <p>75%</p>
                        </div>
                        </div>

                    </div>
                    </div>
        </div>
    )
}

export default Profile;
