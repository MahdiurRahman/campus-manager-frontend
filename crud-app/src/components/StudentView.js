import React, {Component} from 'react';
import EditStudent from './EditStudent';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

class StudentView extends Component {
    constructor(props) {
        super(props)
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
            <button><Link to={"/students/" + student.id + "/edit"}>Edit</Link></button>
            <button>LINK AND FUNCTION TO DELETE</button>
            </div>
            )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students
    }
}

export default connect(mapStateToProps, {})(StudentView)
