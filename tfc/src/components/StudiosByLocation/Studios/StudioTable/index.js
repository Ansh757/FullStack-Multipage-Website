import {useContext, useState} from "react";
import APIContext from "../../../../Contexts/APIContext";
import '../StudioTable/style.css';
import {Link, useNavigate, useLocation, useParams} from "react-router-dom";

const StudioTable = ({ perPage, params }) => {
    const { studios } = useContext(APIContext);
    const { uid } = useParams();
    //const { setStudioID } = useContext(APIContextID);

    /*const setID = (e) => {
        e.preventDefault();
        console.log('4')
        setStudioID('4')
        return true;
    }; */
    //console.log(studios)
    return <div>
            {studios.map((studios, index) => (
                <h3 key={(params.page - 1) * perPage + index + 1} className="new-container">
                    <p className="studio-info-text">
                        { (params.page - 1) * perPage + index + 1 }
                        .  <Link to={"/" + uid + "/studios/" + "studio-page/" + studios.id} state={{ id: studios.id }}
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


