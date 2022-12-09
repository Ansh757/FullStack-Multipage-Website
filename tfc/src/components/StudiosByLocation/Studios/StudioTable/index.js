import {useContext, useState} from "react";
import APIContext from "../../../../Contexts/APIContext";
import './style.css';
import {Link, useNavigate, useLocation} from "react-router-dom";

const StudioTable = ({ perPage, params }) => {
    const { studios } = useContext(APIContext);
    //const { setStudioID } = useContext(APIContextID);

    /*const setID = (e) => {
        e.preventDefault();
        console.log('4')
        setStudioID('4')
        return true;
    }; */

    return <div>
            {studios.map((studios, index) => (
                <h3 key={(params.page - 1) * perPage + index + 1} className="new-container">
                    <p className="studio-info-text">
                        { (params.page - 1) * perPage + index + 1 }
                        .  <Link to="studio-page" state={{ id: studios.id }}
                            >
                                { studios.name }
                            </Link>
                        {/*<a href='/studio-page' onClick={(e) => Editnavigate(e,1)}>
                            { studios.name }</a> */}
                        <br/>
                        { studios.address } - { studios.distance }m
                    </p>
                </h3>
            ))}
        </div>
}

export default StudioTable;
