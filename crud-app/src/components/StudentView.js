import React from 'react';
import EditStudent from './EditStudent';
import {Link} from 'react-router-dom'

function StudentView(props) {
    return (
            <div>
            <p>{props.name}</p>
            <img src={props.img} />
            <p>{props.gpa}</p>
            <p>This student is registered to:</p>
            {/* INSERT CAMPUS CARD OVER HERE WITH A PROP SENDING TO CORRECT CAMPUS */}
            <button><Link to={"/students/" + props.id + "/edit"}>Edit</Link></button>
            <button>LINK AND FUNCTION TO DELETE</button>
            </div>
            )
}

export default StudentView
