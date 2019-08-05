import React, { Component } from 'react'
import StudentCard from './StudentCard'
import {connect} from 'react-redux'
import {editCampus} from '../actions'

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = 
        {
            id: props.campus.id,
            name: props.campus.name,
            bio: props.campus.bio,
            address: props.campus.address,
            img: props.campus.img
        }
        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitHandler = event => {
        event.preventDefault()
        this.props.editCampus(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <input name="name" type="text" placeholder="name" value={this.state.name} onChange={this.onChangeHandler} />
                    <input name="address" type="text" placeholder="address" value={this.state.address} onChange={this.onChangeHandler} />
                    <input name="img" type="text" placeholder="image url" value={this.state.img} onChange={this.onChangeHandler} />
                    <textarea name="bio" placeholder="Insert Description" value={this.state.bio} onChange={this.onChangeHandler} ></textarea>
                    <button>Save Changes</button>
                </form>
                <form>
                    <select>
                        <option>Select a student...</option>
                        {/* {CONNECT: students not in campus} */}
                    </select>
                </form>
                <div>
                    {/* {CONNECT: students in campus} */}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {
    editCampus
})(EditCampus)