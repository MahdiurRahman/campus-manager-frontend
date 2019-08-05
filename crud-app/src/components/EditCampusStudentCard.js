import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';
import {removeStudentFromCampus} from '../actions/index.js';
import {connect} from "react-redux";

class EditCampusStudentCard extends Component{
	constructor(props) {
		super(props)
	}

	removeStudentFromCampus(student) {
		console.log("RUNNING")
        this.props.removeStudentFromCampus(student);
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
				<button onClick={() => {
					let obj = { id: this.props.studentId }
					console.log(obj)
					this.removeStudentFromCampus(obj)
				}}>remove from campus</button>
			</div>
		);
	}
}

const getStateToProps = state => {
	return {};
}
export default connect(getStateToProps, {
	removeStudentFromCampus: removeStudentFromCampus
})(EditCampusStudentCard);