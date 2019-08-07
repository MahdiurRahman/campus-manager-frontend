import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'
import StudentViewCampusCard from './StudentViewCampusCard'

class StudentView extends Component {
    constructor(props) {
        super(props);
    }

    removeStudent(student) {
        this.props.removeStudent(student)
    }

    render() {
        let student;
        console.log(this.props.student_id)
        for (let i = 0; i < this.props.students.length; i++) {
            if (this.props.students[i].id == this.props.student_id) {
                student = this.props.students[i]
            }
        }

        let currentCampus = undefined;
    for (let i = 0; i < this.props.campuses.length; i++){
        console.log(this.props.campuses[i].id + " ID");
        if (this.props.campuses[i].id == student.college){
        currentCampus = this.props.campuses[i];
        break;
      }
    }

        return (
            <div>
            <p>{student.name}</p>
            <img src={student.img} />
            <p>{student.gpa}</p>
            <p>This student is registered to:</p>
            <div className="campusCard">
                {student.college !== undefined ?
                    <Link to={"/campuses/" + student.college}>
                        <StudentViewCampusCard campus = {currentCampus} />
                    </Link>
                    :
                    "Not Enrolled"
                }
                </div>
            <Link to={"/students/" + student.id + "/edit"}><button>Edit</button></Link>
            <button onClick={() => this.removeStudent(student)}>delete</button>
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

export default connect(mapStateToProps, {
    removeStudent: removeStudent
})(StudentView)
