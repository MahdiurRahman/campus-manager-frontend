import React from "react"
import "./CampusCard.css"
import {connect} from "react-redux"
import {Redirect} from 'react-router';
import {removeCampus} from '../actions/index.js'

class CampusCard extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      view: false,
      redirectUrl: ""
    };
    this.removeCampus = this.removeCampus.bind(this);
		this.viewCampus = this.viewCampus.bind(this);
	}

	removeCampus() {
		this.props.removeCampus(this.props.campus);
  }
  
  viewCampus() {
    let newUrl = "./campuses/" + this.props.campus.id;
    this.setState({view: true, redirectUrl: newUrl});
  }
    render() {
      if (!this.state.view) {
        return(
            <div className="CampusCard">
              <img className="campus-card-img" src={this.props.campus.img}/>
              <div className="campus-card-info">
                <div className="campus-card-title">{this.props.campus.name}</div>
                <div className="campus-card-element">{this.props.campus.bio}</div>
                <button className="campus-card-element">edit</button>
                <button className="campus-card-element" onClick={this.removeCampus}>remove</button>
                <button className="campus-card-element" onClick={this.viewCampus}>view</button>
              </div>
            </div>
        );
      } else {
        return(
            <Redirect to={this.state.redirectUrl}/>
        );
      }
    }
}

const getStateToProps = (State) => {
	return {};
}
export default connect(getStateToProps, {removeCampus: removeCampus})(CampusCard);