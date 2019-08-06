import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'

class StudentView extends Component {
    constructor(props) {
        super(props)
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
        return (
            <div>
            <p>{student.name}</p>
            <img src={student.img} />
            <p>{student.gpa}</p>
            <p>This student is registered to:</p>
            {/* INSERT CAMPUS CARD OVER HERE WITH A PROP SENDING TO CORRECT CAMPUS */}
            <Link to={"/students/" + student.id + "/edit"}><button>Edit</button></Link>
            <button onClick={() => this.removeStudent(student)}>delete</button>
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps, {
    removeStudent: removeStudent
})(StudentView)
