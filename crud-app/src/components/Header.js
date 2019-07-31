import React from 'react';
import './Header.css';

class Header extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ul id="header">
                <li> Home </li>
                <li> Campuses </li>
                <li> Students </li>
            </ul>
        )
    }
}

export default Header;