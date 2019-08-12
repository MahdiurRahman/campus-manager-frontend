import React from "react";
import "./CampusCard.css";
import {connect} from "react-redux";
import {removeCampus, removeCampusFromStudent} from '../../actions/index.js';
import {Link} from 'react-router-dom';

class CampusCard extends React.Component {
	constructor(props) {
    super(props);
    this.removeCampus = this.removeCampus.bind(this);
	}

	removeCampus() {
    this.props.removeCampusFromStudent(this.props.campus);
    this.props.removeCampus(this.props.campus);
  }

    render() {
        return(
            <div className="CampusCard">
              <img className="campus-card-img" src={this.props.campus.img}/>
              <div className="campus-card-info">
                <Link className="campus-card-title" to={"/campuses/" + this.props.campus.id}>{this.props.campus.name}</Link>
                <div className="campus-card-element">{this.props.campus.bio}</div>
                <div className="campus-card-element">
                  <Link to={"/campuses/" + this.props.campus.id + "/edit"}>
                    <button className="campus-card-button">
                      Edit
                    </button>
                  </Link>
                  <button className="campus-card-button" onClick={this.removeCampus}>Remove</button>
                </div>
              </div>
            </div>
        );
    }
}

const getStateToProps = (state) => {
	return {
    students: state.students,
    campuses: state.campuses
  };
}
export default connect(getStateToProps, {
  removeCampus: removeCampus,
  removeCampusFromStudent: removeCampusFromStudent
})(CampusCard);