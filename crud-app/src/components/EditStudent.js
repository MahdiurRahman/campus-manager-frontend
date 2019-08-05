import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editStudent} from '../actions'

class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state =
        {
        id: props.student.student_id,
        name: props.student.name,
        gpa: props.student.gpa,
        img: props.student.img,
        college: props.student.college
        }
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    
    onChangeHandler = event => {
        this.setState({
                      [event.target.name]: [event.target.value]
                      })
    }
    
    onSubmitHandler = event => {
        event.preventDefault()
        this.props.editStudent(this.state)
    }
    
    render() {
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
    return state
}

export default connect(mapStateToProps, {
                       editStudent
                       })(EditStudent)
