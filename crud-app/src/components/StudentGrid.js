import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom'

class StudentGrid extends Component{

	render(){
		return (
			<div className="studentsPage">
				<Header />
				<div className="studentGridTop">
					<h1>All Students</h1>
				</div>
				<div className="studentGridView">
					{this.props.students.map(singleStudent => (
						<StudentCard name={singleStudent.name} campusId={singleStudent.college} imageLink={singleStudent.img} getCampusName={this.props.getCampusName} />
						))}
				</div>
			</div>
		);
	}
}

export default StudentGrid;