import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom';
import StudentView from './StudentView.js';
import {connect} from 'react-redux'

 class StudentGrid extends Component {

 	render(){
 		return (
 			<div className="studentsPage">
 				<div className="studentGridTop">
 					<h1>All Students</h1>
 				</div>
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