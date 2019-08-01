import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom'

class StudentGrid extends Component{

	render(){

		// let studentList = [];
		// for (let i  = 0; i < this.props.students; i++){
		// 	studentList.push(
		// 		<Link to={`/students/${this.props.students[i].id}`}>
		// 			<StudentCard name={this.props.students[i].name} campusName={this.props.students[i].college} imageLink={this.props.students[i].img} />
		// 		</Link>
		// 		);
		// }
		return (
			<div className="studentsPage">
				<Header />
				<div className="studentGridTop">
					<h1>Students</h1>
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