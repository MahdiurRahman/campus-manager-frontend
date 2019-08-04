import React, { Component } from 'react'
import StudentCard from './StudentCard'
import {connect} from 'react-redux'

class EditCampus extends Component {
    constructor(props) {
        super(props)
        this.state = {
            campusID: props.campusID
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input name="name" type="text" placeholder="name" />
                    <input name="address" type="text" placeholder="address" />
                    <input name="imageURL" type="text" placeholder="image url" />
                    <textarea placeholder="Insert Description"></textarea>
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

export default connect(mapStateToProps, {})(EditCampus)