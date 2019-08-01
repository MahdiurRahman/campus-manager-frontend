import React, {Component} from 'react';
import './StudentCard.css';
import { Link } from 'react-router-dom';

class StudentCard extends Component{
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
				<div className="campusName">
					{this.props.getCampusName(this.props.campusId)}
				</div>
				</Link>
			</div>
		);
	}
}

export default StudentCard;