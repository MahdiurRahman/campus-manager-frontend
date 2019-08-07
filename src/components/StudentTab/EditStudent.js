import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editStudent} from '../../actions';
import {Redirect} from 'react-router';

class EditStudent extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            id: props.student.id,
            name: props.student.name,
            gpa: props.student.gpa,
            img: props.student.img,
            college: props.student.college,
            Redirect: false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    componentDidMount() {
        let currentStudent = this.props.students.find(student => (student.id === this.props.student.id));

        this.setState({
            id: currentStudent.id,
            name: currentStudent.name,
            gpa: currentStudent.gpa,
            img: currentStudent.img,
            college: currentStudent.college
        })
    }
    
    onChangeHandler = event => {
        this.setState({
                      [event.target.name]: event.target.value
                      })
    }
    
    onSubmitHandler = event => {
        event.preventDefault()
        this.props.editStudent(this.state)
        this.setState({redirect: true})
    }
    
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={"/students/" + this.state.id}/>
            );
        }
        return (
                <div>
                <form onSubmit={this.onSubmitHandler}>
                <input name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onChangeHandler} />
                <input name="gpa" type="text" placeholder="GPA" value={this.state.gpa} onChange={this.onChangeHandler} />
                <input name="img" type="text" placeholder="Image URL" value={this.state.img} onChange={this.onChangeHandler} />
                <input type="submit" value="Save Changes" />
                </form>
                </div>
                )
    }
}

const mapStateToProps = state => {
    return {students: state.students}
}

export default connect(mapStateToProps, {
                       editStudent
                       })(EditStudent)
