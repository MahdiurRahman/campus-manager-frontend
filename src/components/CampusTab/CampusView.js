import React, { Component } from 'react'
import StudentGrid from '../StudentTab/StudentGrid'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCampus, removeCampusFromStudent} from '../../actions'
import './CampusView.css'

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
            <div className="CampusView">
              <div className="campusview-main">
                <img className="campusview-img" src={this.props.campus_chosen.img} />
                <div className="campusview-info">
                  <div className="campusview-title">{this.props.campus_chosen.name}</div>
                  <div className="campusview-bio">{this.props.campus_chosen.bio}</div>
                </div>
              </div>
              <div className="campusview-actionbar">
                <div className="campusview-address">{this.props.campus_chosen.address}</div>
                <div className="campusview-actions">
                  <Link to={this.props.campus_chosen.id + "/edit"}><button className="campusview-buttons">edit</button></Link>
                  <button className="campusview-buttons btn-remove" onClick={() => this.removeCampus_(campus)}>remove</button>
                </div>
              </div>
              <div className="campusview-students">
                <div className="campusview-title studentgrid-title">Students in this campus</div>
            .   <StudentGrid className="studentgrid" students={this.props.students}/>
              </div>
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