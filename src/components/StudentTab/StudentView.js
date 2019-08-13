import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'
import {editStudent} from '../../actions'
import CampusCard from '../CampusTab/CampusCard'
import './StudentView.css'

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
            <div className="StudentView">
              <div className="studentview-main">
                <img className="studentview-img" src={this.state.student.img} />
                <div className="studentview-info">
                  <div className="studentview-title">{this.state.student.name}</div>
                  <div className="studentview-gpa">GPA: {this.state.student.gpa}</div>
                </div>
              </div>
              <div className="studentview-actionbar">
                <div className="studentview-actions">
                  <Link to={"/students/" + this.state.student.id + "/edit"}><button className="studentview-buttons">edit</button></Link>
                  <button className="campusview-buttons btn-remove" onClick={() => this.removeStudent(this.state.student)}>remove</button>
                </div>
              </div>
            <div className="campusbar">
                {this.state.student.campusId !== undefined && currentCampus !== undefined ?
                	<div>
                		<p className="studentview-title campusbar-header">This student is registered to:</p>
                        <div className="campusbar-card">
                        	<CampusCard campus = {currentCampus} />
                    	</div>
                    </div>
                    :
                    "Not Enrolled"
                }
                    <div className = "campusEditSection">
                        <select className="studentview-buttons" name="campus" onChange={this.handleCampusSelection}>
                            <option>Select Campus...</option>
                            {this.props.campuses.map(campus => (
                                <option>{campus.name}</option>
                            ))}
                        </select>
                        <button className="studentview-buttons" onClick={this.changeCampus}>Save Changes</button>
                    </div>
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
