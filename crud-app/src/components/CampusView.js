import React, { Component } from 'react'
import CampusStudentGrid from './CampusStudentGrid.js'
import {connect} from 'react-redux'

class CampusView extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let campus;
        console.log(this.props.campus_id)
        for (let i = 0; i < this.props.campuses.length; i++) {
            if (this.props.campuses[i].id == this.props.campus_id) {
                campus = this.props.campuses[i]
            }
        }
        
        return (
            <div>
                <p>{campus.name}</p>
                <img src={campus.img} />
                <p>{campus.address}</p>
                <p>{campus.bio}</p>
                <p>Students on campus:</p>
                <CampusStudentGrid students={this.props.students}/>
                <button>FUTURE LINK TO EDIT</button>
                <button>FUTURE LINK AND FUNCTION TO DELETE</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        campuses: state.campuses
    }
}

export default connect(mapStateToProps, {})(CampusView)