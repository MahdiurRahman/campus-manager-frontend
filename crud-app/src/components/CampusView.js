import React, { Component } from 'react'

function CampusView(props) {
    return (
        <div>
            <p>{props.title}</p>
            <img src={props.imageURL} />
            <p>{props.address}</p>
            <p>{props.description}</p>
            <button>LINK TO EDIT</button>
            <button>LINK AND FUNCTION TO DELETE</button>
        </div>
    )
}

export default CampusView