import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {removeStudentFromCampus} from '../../actions';
import {connect} from "react-redux";
import {Redirect} from "react-router";

class EditCampusStudentCard extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
	        removed: false,
	    }
        this.removeStudentFromCampus = this.removeStudentFromCampus.bind(this);
	}

	removeStudentFromCampus(student) {
		console.log("RUNNING")
		this.props.removeStudentFromCampus(student);
		this.setState({removed: true});
    }

	render(){
	    if (this.state.removed) {
	        return(
                <Redirect to={"/campuses/" + this.props.selectedCampus.id +"/edit/"}/>
            );
	    }
		let thisStudentIdLink = "/students/" + this.props.student.id;
		return(
			<div className="studentInfo">
				<Link to={thisStudentIdLink}>
				<div className="studentImage">
					<img src={this.props.student.img} alt="Student Pic" />
				</div>
				<div className="studentName">
					{this.props.student.name}
				</div>
				</Link>
				<button onClick={() => {
					this.removeStudentFromCampus(this.props.student)
				}}>remove from campus</button>
			</div>
		);
	}
}

const getStateToProps = state => {
	return {selectedCampus: state.selectedCampus};
}
export default connect(getStateToProps, {
	removeStudentFromCampus: removeStudentFromCampus
})(EditCampusStudentCard);