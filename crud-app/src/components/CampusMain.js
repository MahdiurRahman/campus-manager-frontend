import React from "react";
import Header from './Header.js';
import CampusGrid from "./CampusGrid.js";
import "./CampusMain.css";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class CampusMain extends React.Component {
    render() {
        return (
            <div>
              <Header/>
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