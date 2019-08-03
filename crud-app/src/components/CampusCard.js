import React from "react"
import "./CampusCard.css"
import {connect} from "react-redux"
import {removeCampus} from '../actions/index.js'

class CampusCard extends React.Component {
	constructor(props) {
		super(props);
		this.removeCampus = this.removeCampus.bind(this);
	}

	removeCampus() {
		this.props.removeCampus(this.props.campus);
	}
    render() {
        return(
            <div className="CampusCard">
              <img className="campus-card-img" src={this.props.campus.img}/>
              <div className="campus-card-info">
                <div className="campus-card-title">{this.props.campus.name}</div>
                <div className="campus-card-element">{this.props.campus.bio}</div>
                <button className="campus-card-element">edit</button>
                <button className="campus-card-element" onClick={this.removeCampus}>remove</button>
              </div>
            </div>
        );
    }
}

const getStateToProps = (State) => {
	return {};
}
export default connect(getStateToProps, {removeCampus: removeCampus})(CampusCard);