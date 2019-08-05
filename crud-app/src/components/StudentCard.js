import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeStudent} from '../actions'

class StudentCard extends Component{
	constructor(props) {
		super(props);
		this.removeStudent = this.removeStudent.bind(this);
	}

	removeStudent() {
		this.props.removeStudent(this.props.student);
	}

	render(){
		let thisStudentIdLink = "/students/" + this.props.student.id;
		return(
			<div className="studentInfo">
				<Link to={thisStudentIdLink}>
					<div className="studentImage">
						<img src={this.props.student.img} alt="Student Pic" />
					</div>
					<div className="studentName">
						{this.props.student.name}
					</div>
				</Link>
				<div className="campusName">
					<Link to={"/campuses/" + this.props.student.college}>
						{this.props.campuses[this.props.student.college].name}
					</Link>
				</div>
				<div>
					<button>edit</button>
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