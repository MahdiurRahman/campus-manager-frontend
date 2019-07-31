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
                <li> Campuses </li>
                 <Link to="/students">
                    <li> Students </li>
                 </Link>
            </ul>
        )
    }
}

export default Header;