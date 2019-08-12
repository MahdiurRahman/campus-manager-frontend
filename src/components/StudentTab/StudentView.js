import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'
import {editStudent} from '../../actions'
import StudentViewCampusCard from './StudentViewCampusCard'

class StudentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changedCampus: undefined,
            student: ""
        }
        this.handleCampusSelection = this.handleCampusSelection.bind(this);
        this.changeCampus = this.changeCampus.bind(this);
    }

    componentDidMount(){
        let currentStudent;
        for (let i = 0; i < this.props.students.length; i++) {
            if (this.props.students[i].id == this.props.student_id) {
                currentStudent = this.props.students[i]
            }
        }
        this.setState({
            student: currentStudent
        })
    }

    removeStudent(student) {
        this.props.removeStudent(student)
    }

    handleCampusSelection = (event) =>{
        this.setState({
            changedCampus: event.target.value
        });
    }

    changeCampus(){
        console.log(this.state.changedCampus + " campus");
        if (this.state.changedCampus){
            let newCampus = undefined;
            for (let i = 0; i < this.props.campuses.length; i++){
                if (this.props.campuses[i].name == this.state.changedCampus){
                    newCampus = this.props.campuses[i].id;
                    break;
                }
            }
            let newStudent = this.state.student;
            newStudent.campusId = newCampus;
            this.props.editStudent(newStudent);
        }
    }

    render() {
    let currentCampus = undefined;
    for (let i = 0; i < this.props.campuses.length; i++){
        if (this.props.campuses[i].id == this.state.student.campusId){
        currentCampus = this.props.campuses[i];
        break;
      }
    }

        return (
            <div>
            <p>{this.state.student.name}</p>
            <img src={this.state.student.img} />
            <p>{this.state.student.gpa}</p>
            <div className="campusCard">
                {this.state.student.campusId !== undefined && currentCampus !== undefined ?
                	<div>
                		<p>This student is registered to:</p>
                    	<Link to={"/campuses/" + this.state.student.campusId}>
                        	<StudentViewCampusCard campus = {currentCampus} />
                    	</Link>
                    </div>
                    :
                    "Not Enrolled"
                }
                </div>
            <Link to={"/students/" + this.state.student.id + "/edit"}><button>Edit</button></Link>
            <button onClick={() => this.removeStudent(this.state.student)}>delete</button>
            <div className = "campusEditSection">
            <select name="campus" onChange={this.handleCampusSelection}>
                            <option>Select Campus...</option>
                            {this.props.campuses.map(campus => (
                                <option>{campus.name}</option>
                            ))}
                        </select>
                        <button onClick={this.changeCampus}>Save Changes</button>
                    </div>
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
    removeStudent,
    editStudent
})(StudentView)
