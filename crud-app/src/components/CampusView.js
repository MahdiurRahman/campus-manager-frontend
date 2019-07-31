import React, { Component } from 'react'

function CampusView(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.imageURL} />
            <p>{props.address}</p>
            <p>{props.description}</p>
            <p>Students on campus:</p>
            {/* INSERT STUDENT CARDS OVER (possibly via map?) HERE WITH A PROP SENDING TO CORRECT STUDENTS */}
            <button>FUTURE LINK TO EDIT</button>
            <button>FUTURE LINK AND FUNCTION TO DELETE</button>
        </div>
    )
}

export default CampusView