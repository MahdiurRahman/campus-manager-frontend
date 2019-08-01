import React, { Component } from 'react'

function CampusView(props) {
    return (
        <div>
            <p>{props.campus.name}</p>
            <img src={props.campus.img} />
            <p>{props.campus.address}</p>
            <p>{props.campus.bio}</p>
            <p>Students on campus:</p>
            {/* INSERT STUDENT CARDS OVER (possibly via map?) HERE WITH A PROP SENDING TO CORRECT STUDENTS */}
            <button>FUTURE LINK TO EDIT</button>
            <button>FUTURE LINK AND FUNCTION TO DELETE</button>
        </div>
    )
}

export default CampusView