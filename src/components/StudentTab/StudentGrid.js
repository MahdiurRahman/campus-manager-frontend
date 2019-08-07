import React, {Component} from 'react';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';

 class StudentGrid extends Component {

 	render(){
 		return (
 			<div className="studentsPage">
 				<div className="studentGridView">
				    {this.props.students.map(student => (
                		<StudentCard student={student}/>
              		))}
 				</div>
 			</div>
 		);
 	}
 }


export default StudentGrid;
