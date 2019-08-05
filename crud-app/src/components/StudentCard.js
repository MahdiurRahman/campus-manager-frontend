import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeStudent} from '../actions'

class StudentCard extends Component{
	removeStudent = event => {
		event.preventDefault()
		console.log(this.props.students)
		this.props.removeStudent(this.props.students[this.props.student_id].id)
	}

	render(){
		let thisStudentIdLink = "/students/" + this.props.student_id;
		return(
			<div className="studentInfo">
				<Link to={thisStudentIdLink}>
					<div className="studentImage">
						<img src={this.props.students[this.props.student_id].img} alt="Student Pic" />
					</div>
					<div className="studentName">
						{this.props.students[this.props.student_id].name}
					</div>
				</Link>
				<div className="campusName">
					<Link to={"/campuses/" + this.props.students[this.props.student_id].college}>
						{this.props.campuses[this.props.students[this.props.student_id].college].name}
					</Link>
				</div>
				<div>
					<button onClick={() => this.removeStudent}>edit</button>
					<button onClick={this.removeStudent}>remove</button>
				</div>
				

			</div>
		);
	}
}

const getStateToProps = state => {
	return {
		students: state.students,
		campuses: state.campuses
	}
}

export default connect(getStateToProps, {
	removeStudent
})(StudentCard)