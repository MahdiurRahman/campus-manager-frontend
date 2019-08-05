import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom';
import StudentView from './StudentView.js';
import {connect} from 'react-redux'

 class StudentGrid extends Component {

 	render(){
 		return (
 			<div className="studentsPage">
 				<div className="studentGridTop">
 					<h1>All Students</h1>
 				</div>
 				<div className="studentGridView">
				    {this.props.students.map(student => (
                		<StudentCard student={student}/>
              		))}
 				</div>
 			</div>
 		);
 	}
 }


<<<<<<< HEAD
class StudentGrid extends Component {
	render() {
		let component = this.props
		let student_list;
		if (this.props.mapAll === "on") {
			console.log("DDDDDddJJJJJ")
			student_list = this.props.students.map(student => {
				return (
					<StudentCard student_id={student.id} />
				)
			})
		}
		else {
			student_list = this.props.students.map(student => {
				if (student.college == component.college_id) {
					return <StudentCard id={student.id} />
				}
			})
		}
		return (
			<div>
				{student_list}
			</div>
		)
	}
}

const getStateToProps = state => {
	return {
		students: state.students
	}
}

export default connect(getStateToProps, {})(StudentGrid)
=======
export default StudentGrid;
>>>>>>> studentsMain
