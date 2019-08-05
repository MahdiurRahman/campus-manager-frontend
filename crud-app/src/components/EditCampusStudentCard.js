import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';
import {removeCampusFromStudent} from '../actions/index.js';
import {connect} from "react-redux";

class EditCampusStudentCard extends Component{

	 removeCampus_(student) {
        this.props.removeCampusFromStudent(student);
    }

	render(){
		let thisStudentIdLink = "/students/" + this.props.studentId;
		return(
			<div className="studentInfo">
				<Link to={thisStudentIdLink}>
				<div className="studentImage">
					<img src={this.props.imageLink} alt="Student Pic" />
				</div>
				<div className="studentName">
					{this.props.name}
				</div>
				</Link>
				<button onClick={this.removeCampusFromStudent}>remove from campus</button>
			</div>
		);
	}
}

const getStateToProps = (State) => {
	return {};
}
export default connect(getStateToProps, {
  removeCampusFromStudent: removeCampusFromStudent
})(EditCampusStudentCard);