import React, {Component} from "react";
import StudentGrid from "./StudentGrid.js";
import "./StudentMain.css";
import {Link} from "react-router-dom";

class StudentMain extends Component {
    render() {
        return (
                <div>
                    <div className="student-main">
                        <div className="student-nav">
                            <div className="student-nav-element nav-title">All Students</div>
                                <Link to="/studentAddForm" className="student-nav-element">Add Student</Link>
                            </div>
                            <StudentGrid students={this.props.students} />
                        </div>
                    </div>
                );
    }
}

export default StudentMain;
