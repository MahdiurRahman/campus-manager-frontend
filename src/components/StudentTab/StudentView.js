import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'
import {editStudent} from '../../actions'
import {Redirect} from 'react-router'
import StudentViewCampusCard from './StudentViewCampusCard'
import {removeStudentFromCampus} from '../../actions'
import axios from 'axios'
import CampusCard from '../CampusTab/CampusCard'
import './StudentView.css'

class StudentView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changedCampus: undefined,
            student: "",
            redirect: false
        }
        this.handleCampusSelection = this.handleCampusSelection.bind(this);
        this.changeCampus = this.changeCampus.bind(this);
    }

    componentDidMount(){
        console.log(this.props.student_chosen)
        this.setState({
            student: this.props.student_chosen
        })
    }

    async removeStudent(student) {
        console.log(this.state.student);
        await this.setState({
            redirect: true
        })
        let url = 'http://localhost:5000/api/students/' + student.id;
        console.log(student.id);
        await axios.delete(url)
        .then(res => {
            console.log(res);
            this.props.removeStudentFromCampus(student);
        })
        .catch(err => console.log(err));
        this.props.removeStudent(student)
    }

    handleCampusSelection = (event) =>{
        this.setState({
            changedCampus: event.target.value
        });
    }

    async changeCampus(){
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

            let url ='http://localhost:5000/api/students/' + newStudent.id;
            await axios.put(url,{
                name: newStudent.name,
                gpa : newStudent.gpa,
                img : newStudent.img,
                campus: newStudent.campusId
            })
            .then (res => {
                //let singleStudent = res.body
                console.log('updated')
                this.props.editStudent(newStudent);
            })
            .catch(err => console.log(err));
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

    if (this.state.redirect) {
            return (
                <Redirect to={"/students/"}/>
            );
        }

        return (
            <div className="StudentView">
              <div className="studentview-main">
                <img className="studentview-img" src={this.props.student_chosen.img} />
                <div className="studentview-info">
                  <div className="studentview-title">{this.props.student_chosen.name}</div>
                  <div className="studentview-gpa">GPA: {this.props.student_chosen.gpa}</div>
                </div>
              </div>
              <div className="studentview-actionbar">
                <div className="studentview-actions">
                  <Link to={"/students/" + this.props.student_id + "/edit"}><button className="studentview-buttons">edit</button></Link>
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
                            {this.props.campuses.filter(campus => (campus.id != this.props.student_chosen.ca)).map(campus => (
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
