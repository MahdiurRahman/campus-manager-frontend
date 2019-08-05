import React, {Component} from 'react';
import Header from './Header.js';
import StudentCard from './StudentCard.js';
import './StudentGrid.css';
import { Link } from 'react-router-dom';
import StudentView from './StudentView.js';
import {connect} from 'react-redux'

class StudentGrid extends Component {
	render() {
		let component = this.props
		let student_list;
		if (this.props.mapAll === "on") {
			student_list = this.props.students.map(student => {
				return (
					<StudentCard student_id={student.id} />
				)
			})
		}
		else {
			student_list = this.props.students.map(student => {
				if (student.college == component.college_id) {
					return <StudentCard id={student.id} />
				}
			})
		}
		return (
			<div>
				{student_list}
			</div>
		)
	}
}

const getStateToProps = state => {
	return {
		students: state.students
	}
}

export default connect(getStateToProps, {})(StudentGrid)
