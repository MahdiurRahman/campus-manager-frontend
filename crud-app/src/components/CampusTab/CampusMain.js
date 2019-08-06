import React from "react";
import CampusGrid from "./CampusGrid.js";
import "./CampusMain.css";
import {Link} from "react-router-dom";

class CampusMain extends React.Component {
    render() {
        return (
            <div>
              <div className="campus-main">
                <div className="campus-nav">
                  <div className="campus-nav-element nav-title">All Campuses</div>
                  <Link to="/campusAddForm" className="campus-nav-element">Add Campus</Link>
                </div>
                <CampusGrid campuses={this.props.campuses}/>
              </div>
            </div>
        );
    }
}

export default CampusMain;