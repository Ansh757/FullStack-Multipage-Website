import {useContext} from "react";
import APIContext from "../../../../Contexts/APIContext";
import './style.css';


const StudioTable = ({ perPage, params }) => {
    const { studios } = useContext(APIContext);

    return <div>
            {studios.map((studios, index) => (
                <h3 key={(params.page - 1) * perPage + index + 1} className="list-container"> 
                    <p className="studio-info-text">
                        { (params.page - 1) * perPage + index + 1 }. { studios.name } <br/>
                        { studios.address } - { studios.distance }m
                    </p>
                </h3>
            ))}
        </div>
}

export default StudioTable;
