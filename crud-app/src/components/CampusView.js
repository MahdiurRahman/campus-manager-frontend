import React, { Component } from 'react'
import CampusStudentGrid from './CampusStudentGrid.js'

function CampusView(props) {
    console.log(props.students);
    return (
        <div>
            <p>{props.campus.name}</p>
            <img src={props.campus.img} />
            <p>{props.campus.address}</p>
            <p>{props.campus.bio}</p>
            <p>Students on campus:</p>
            <CampusStudentGrid students={props.students}/>
            <button>FUTURE LINK TO EDIT</button>
            <button>FUTURE LINK AND FUNCTION TO DELETE</button>
        </div>
    )
}

export default CampusView