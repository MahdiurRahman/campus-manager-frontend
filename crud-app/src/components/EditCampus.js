import React, { Component } from 'react'
import StudentCard from './StudentCard'
import {connect} from 'react-redux'
import {editCampus} from '../actions'
import {editStudent} from '../actions'
import {Redirect} from 'react-router'

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            id: props.campus.id,
            name: props.campus.name,
            bio: props.campus.bio,
            address: props.campus.address,
            img: props.campus.img,
            redirect: false
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    onSubmitHandler = event => {
        event.preventDefault()
        this.props.editCampus(this.state)

        let name = event.target.student.value;
        let student = undefined;

        for (let i = 0; i < this.props.students.length; i++) {
            if (name == this.props.students[i].name) {
                student = this.props.students[i];
            }
        }

        if (student) {
            console.log(student);
            console.log(this.props.campus.id);
            student.college = this.props.campus.id;
            console.log(student);
            this.props.editStudent(student);
        }
        this.setState({redirect: true});
    }

    render() {
        if (this.state.redirect) {
            return (
                <Redirect to="/campuses"/>
            )
        }
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.onChangeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.onChangeHandler} />
                    <input name="img" type="text" placeholder="image url" value={this.state.img} onChange={this.onChangeHandler} />
                    <textarea name="bio" placeholder="Insert Description" value={this.state.bio} onChange={this.onChangeHandler} ></textarea>
                    <button>Save Changes</button>
                    <select name="student">
                        <option>Select student...</option>
                        {this.props.students.filter(student => (student.college !== this.props.campus.id)).map((student) => (
                            <option>{student.name}</option>
                        ))}
                    </select>
                </form>
                <div>
                    {/* {CONNECT: students in campus} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = State => {
    return {students: State.students}
}

export default connect(mapStateToProps, {
    editCampus,
    editStudent
})(EditCampus)