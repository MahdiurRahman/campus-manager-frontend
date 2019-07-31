import React from 'react'

function StudentView(props) {
    return (
        <div>
            <p>{props.name}</p>
            <img src={props.imageURL} />
            <p>{props.gpa}</p>
            <p>This student is registered to:</p>
            {/* INSERT CAMPUS CARD OVER HERE WITH A PROP SENDING TO CORRECT CAMPUS */}
            <button>LINK TO EDIT</button>
            <button>LINK AND FUNCTION TO DELETE</button>
        </div>
    )
}

export default StudentView