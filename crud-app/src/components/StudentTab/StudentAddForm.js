import React, {Component} from "react"
import {connect} from 'react-redux';
import {addStudent} from '../../actions';
import {Redirect} from 'react-router';

class StudentAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.addStudent = this.addStudent.bind(this);
    }
    
    addStudent (e) {
        e.preventDefault();
        
        let student = {
        id: e.target.elements.id.value,
            name: e.target.elements.name.value,
            img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg'
        }
        this.props.addStudent(student);
        this.setState({redirect: true});
    }
    
    render() {
        if (!this.state.redirect) {
            return (
                    <form onSubmit={this.addStudent}>
                        <label>
                            ID:
                            <input type="number" name="id" />
                        </label>
                        <label>
                            Name:
                            <input type="text" name="name" />
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    );
        } else {
            return (
                    <Redirect to="/students"/>
                    );
        }
    }
}

const getStateToProps = (State) => {
    return {};
}

export default connect(getStateToProps, {addStudent: addStudent})(StudentAddForm);
