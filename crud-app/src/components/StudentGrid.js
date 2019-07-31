import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';

class StudentGrid extends Component{

	render(){

		let studentList = [];
		for (let i  = 0; i < this.props.students; i++){
			studentList.push(
				<StudentCard name={this.props.students[i].name} campusName={this.props.students[i].college} imageLink={this.props.students[i].img} />
				);
		}
		return (
			<div className="studentsPage">
				<Header />
				<div className="studentGridTop">
					<h1>All Students</h1>
				</div>
				<div className="studentGridView">
					{this.props.students.map(singleStudent => (
						<StudentCard name={singleStudent.name} campusName={singleStudent.college} imageLink={singleStudent.img} />
						))}
				</div>
			</div>
		);
	}
}

export default StudentGrid;