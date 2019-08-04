import React, {Component} from "react";
import Header from './Header.js';
import StudentGrid from "./StudentGrid.js";
import "./StudentMain.css";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class StudentMain extends Component {
    render() {
        return (
                <div>
                    <Header/>
                    <div className="student-main">
                        <div className="student-nav">
                            <div className="student-nav-element nav-title">All Students</div>
                                <Link to="/studentAddForm" className="student-nav-element">Add Student</Link>
                            </div>
                            <StudentGrid students={this.props.students} campuses={this.props.campuses} getCampusName={this.props.getCampusName} />
                        </div>
                    </div>
                );
    }
}

export default StudentMain;