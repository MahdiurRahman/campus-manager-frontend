import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul id="header">
                <li> Home </li>
                 <Link to="/students">
                    <li> Students </li>
                 </Link>
                <Link to="/campuses"><li> Campuses </li></Link> 
            </ul>
        )
    }
}

export default Header;