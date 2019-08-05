import React, { Component } from 'react'
import CampusStudentGrid from './CampusStudentGrid.js'
import StudentGrid from './StudentGrid'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCampus, removeCampusFromStudent} from '../actions/index.js'

class CampusView extends Component {
    constructor(props) {
        super(props)
    }

    removeCampus_(campus) {
        this.props.removeCampus(campus)
        this.props.removeCampusFromStudent(campus)
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
                <Link to={campus.id + "/edit"}><button>edit</button></Link>
                <button onClick={() => this.removeCampus_(campus)}>remove</button>
                <p>Students on campus:</p>
                <StudentGrid students={this.props.students}/>
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

export default connect(mapStateToProps, {
    removeCampus: removeCampus,
    removeCampusFromStudent: removeCampusFromStudent
})(CampusView)