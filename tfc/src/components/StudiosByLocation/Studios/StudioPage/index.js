import React, { useState, useEffect, useContext } from "react";
import {useLocation, useParams, Link} from "react-router-dom";
import '../StudioPage/style.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import APIContext from "../../../../Contexts/APIContext";
import StudioClassSchedule from "./StudioClassSchedule";

function StudioPage(props) {
    const location = useLocation()
    const { uid } = useParams();
    const { id } = location.state
    const [studioName, setStudioName] = useState("");
    const [studioAdd, setStudioAdd] = useState("");
    const [studioLat, setStudioLat] = useState("");
    const [studioLong, setStudioLong] = useState("");
    const [studioImage, setStudioImage] = useState([]);
    const [studioAmen, setStudioAmen] = useState([]);
    const [studioDir, setStudioDir] = useState("");

    const [params, setParams] = useState({page: 0});
    const [params2, setParams2] = useState({page2: 0});

    const { studios } = useContext(APIContext);
    //console.log(studios)
    useEffect(() => {
        //console.log(id)
        const apiUrl1 = `http://localhost:8000/studios/${id}/`;
            axios.get(apiUrl1).then((res) => {
                const {data} = res;
                setStudioName(data.name);
                setStudioAdd(data.address);
                setStudioLat(data.longitude);
                setStudioLong(data.latitude);
                setStudioImage(data.image);
                setStudioAmen(data.ammenities);
                setStudioDir(data.directions);
                
            });
    }, [])

    //console.log(studioAmen);
    const num_pages = studioAmen / 8;
    const navigate = useNavigate();
    return (
        <>
        <div className='plans-overlay'>
            <header>
            <div className="st-page-website-logo">
                        <img src="https://www.cs.toronto.edu/~kianoosh/courses/csc309/resources/images/tfc.png" alt="logo-tfc-picture"/>
                    </div>
                    <div className="st-page-navbar">
                        <nav>
                            <ul className="menuItems">
                                <li><a href='/main' data-item='Home'>Home</a></li>
                                <li><a href='#' data-item='Classes'>Classes</a></li>
                                <li><a href='/studios' data-item='Studios'>Studios</a></li>
                                <li><a href='/plans' data-item='Subscriptions'>Subscriptions</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="st-page-user-logo">
                        {/* <Link to={"/" + this.state.id + "/profile/"}> */}
                            <button className="st-page-user-btn">
                                <i className="fa-solid fa-user"></i>
                            </button>
                        {/* </Link> */}
                        <button className="st-page-user-btn">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </button>
                    </div>

        </header>
        <div className="studio-page">
            <div className="studio-page-info">
                <div><b> Studio Name: </b> {studioName} </div>
                <div><b> Address: </b> {studioAdd} </div>
                <div><b> Latitude: </b> {studioLat} </div>
                <div><b> Longitude: </b> {studioLong} </div>
                <div id="amen-list"><b> Ammenities: </b> 
                        {
                            React.Children.toArray(
                                studioAmen.map(( studioAmen, value ) => 
                                <> 
                                    <span className="amen-list-item">
                                        { studioAmen[0] }: { studioAmen[1] } 
                                    </span>
                                </>
                                )
                        )
                        }
                </div>
                <div><b> Directions: </b> <a  target="_blank" href={studioDir}>{studioDir}</a> </div> 
                <div>
                    {/*<Link to={"/" + uid + "/studios/studio-page/" + id + "/" + "classes/all/"}>
                        <button className="enroll-button"> View Classes </button>
                    </Link>*/}
                </div>
            </div>
            <div className="studio-page-images">
                {/*
                    React.Children.toArray(
                        studioImage.map(( studioImage, value ) => 
                        <> 
                            <div>  
                                studioImage 
                                <img src={studioImage} alt="alternatetext"></img>
                            </div>
                        </>
                        )
                    )
                    */}
                <img src={studioImage[params.page]} id="studio-image" alt="No Images"></img>
                <button className="page-btn-st" onClick={() => setParams({
                    ...params,
                    page: Math.max(0, params.page - 1)
                })}>
                    prev
                </button>
                <button className="page-btn-st" onClick={() => setParams({
                    ...params,
                    page: Math.min(studioImage.length - 1, params.page + 1)
                })}>
                    next
                </button>
            </div>
        </div>
            {/*<footer>
                <h3 style={{color:"white"}}>© Ansh, Armaan, Giancarlo </h3>
            </footer> */}     
        </div>
        <StudioClassSchedule id={id}>
        </StudioClassSchedule>

        </>
    )
}

export default StudioPage;