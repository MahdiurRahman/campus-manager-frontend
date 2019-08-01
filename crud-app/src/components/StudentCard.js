import React, {Component} from 'react';
import './StudentCard.css';

class StudentCard extends Component{
	render(){
		return(
			<div className="studentInfo">
				<div className="studentImage">
					<img src={this.props.imageLink} alt="Student Pic" />
				</div>
				<div className="studentName">
					{this.props.name}
				</div>
				<div className="campusName">
					{this.props.getCampusName(this.props.campusId)}
				</div>
			</div>
		);
	}
}

export default StudentCard;