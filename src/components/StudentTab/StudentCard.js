import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {removeStudent} from '../../actions'

class StudentCard extends Component{
	constructor(props) {
		super(props);
	}

	findCollegeName(id) {
		for (let i = 0; i < this.props.campuses.length; i++) {
			if (this.props.campuses[i].id == id) {
				return this.props.campuses[i].name
			}
		}
		return "undefined"
	}

	render(){
		let thisStudentIdLink = "/students/" + this.props.student.id;
		return(
			<div className="student-card">
				<img className = "student-card-img" src={this.props.student.img} alt="Student Pic" />
				<Link className="student-card-title" to={thisStudentIdLink}>{this.props.student.name}</Link>
				<div className="student-card-element">
				{this.props.student.campusId !== undefined ?
					<Link className = "student-card-element" to={"/campuses/" + this.props.student.campusId}>
						{this.findCollegeName(this.props.student.campusId)}
					</Link>
					:
					"Not Enrolled"
				}
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
