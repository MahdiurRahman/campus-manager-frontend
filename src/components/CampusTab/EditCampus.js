import React, { Component } from 'react'
import {connect} from 'react-redux'
import {editCampus} from '../../actions'
import {selectCampus} from '../../actions'
import {editStudent} from '../../actions'
import {emptyCampus} from '../../actions'
import {addCampus} from '../../actions'
import EditCampusStudentGrid from './EditCampusStudentGrid'
import {Redirect} from 'react-router'
import axios from 'axios'

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
            nameIsCorrect: true,
			addressIsCorrect: true,
            redirect: false
        }
        this.props.selectCampus(this.props.campus);
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.getCampuses = this.getCampuses.bind(this);
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // async getStudents(){
    //     await axios.get('http://localhost:5000/api/students')
    //     .then (response => {
    //            let result = response.data;
    //            for (let i = 0; i < result.length; i++){
    //             this.props.addStudent(result[i]);
    //            }
    //            })
    //     .catch(err => console.log(err));
    // }
    
    async getCampuses(){
        console.log("GET CAMPUSES!")
        await this.props.emptyCampus();
        await axios.get('http://localhost:5000/api/campuses')
        .then(response => {
            let result = response.data;
                for (let i = 0; i < result.length; i++){
                    this.props.addCampus(result[i]);
                }
            }
        )
        .catch(err => console.log(err));
    }

    onSubmitHandler = async event => {
        event.preventDefault()

        let that = this

        let correctName = true;
        if (this.state.name.length < 1){
            correctName = false;
        }
        for (let i = 0; i < this.state.name.length; i++){
            if (!(this.state.name[i].toLowerCase() != this.state.name[i].toUpperCase() || this.state.name[i] == " ")){
                correctName = false;
            }
        }

        let correctAddress = true;
        if (this.state.address.length < 1){
            correctAddress = false;
        }
        for (let i = 0; i < this.state.address.length; i++){
            if (!(this.state.address[i].toLowerCase() != this.state.address[i].toUpperCase() || this.state.address[i] == " " || this.state.address[i] == "," || (this.state.address[i] >= 0 && this.state.address[i] <= 9))){
                correctAddress = false;
            }
        }

        this.setState({
        	nameIsCorrect: correctName,
        	addressIsCorrect: correctAddress
        })

        if (correctName && correctAddress){
        	this.props.editCampus(this.state)
    	}

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
            student.campusId = this.props.campus.id;
            console.log(student);
            this.props.editStudent(student);
        }
        if (correctName && correctAddress){
            //this.props.editStudent(this.state)
            let url ='http://localhost:5000/api/campuses/' + this.state.id;
            const that = this;
            await axios.put(url,{
                name: this.state.name,
                bio : this.state.bio,
                address : this.state.address,
                img: this.state.img
            })
            .then(() => that.setState({redirect: true}))
            .then(async () => await this.getCampuses())
            .catch(err => console.log(err));
    	}
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
                        {this.props.students.filter(student => (student.campusId != this.props.campus.id)).map((student) => (
                            <option>{student.name}</option>
                        ))}
                    </select>
                </form>
                <div className="inputErrors">
                	<div>
                		{this.state.nameIsCorrect ?
                			"" :
                			"Name must be at least one character long and must contain only letters and spaces"
                		}
                	</div>
                	<div>
                		{this.state.addressIsCorrect ?
                			"" :
                			"Address must not be empty, and can consist only of letters, numbers, and spaces"}
                	</div>
                </div>
                <div>
                    <EditCampusStudentGrid students={this.props.students.filter(student => (student.campusId == this.props.campus.id))} />
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
    addCampus,
    emptyCampus,
    selectCampus,
    editStudent
})(EditCampus)
