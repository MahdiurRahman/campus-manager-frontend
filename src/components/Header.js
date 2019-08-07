import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="navbar" id="header">
                <Link className="nav-title" to="/">Campus Manager</Link>
                <Link className="nav-element" to="/campuses">Campuses</Link>
                <Link className="nav-element" to="/students">Students</Link>
            </div>
        )
    }
}

export default Header;