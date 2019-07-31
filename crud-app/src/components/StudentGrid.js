import React, {Component} from 'react';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';

class StudentGrid extends Component{

	render(){

		let students = [];
		for (i of this.props.students){
			students.push(
				<StudentCard name={i.name} campusName={i.campusName} imageLink={i.imageLink} />
				);
		}

		return (
			<div className="studentGridTop">
				<h1>All Students</h1>
			</div>
			<div className="studentGridView">
				{students}
			</div>
			);
	}
}

export default StudentGrid;