import React, {Component} from 'react';
import './StudentCard.css';

class StudentCard extends Componet{
	render(){
		return(
			<div className="studentInfo">
				<div className="studentImage">
					<img src={this.props.imageLink} alt="Picture of the Student" />
				</div>
				<div className="studentName">
					{this.props.name}
				</div>
				<div className="campusName">
					{this.props.campusName}
				</div>
			</div>
		);
	}
}

export default StudentCard;