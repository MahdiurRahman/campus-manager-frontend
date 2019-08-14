import React, { Component } from 'react';
import {connect} from 'react-redux';
import {editStudent} from '../../actions';
import {Redirect} from 'react-router';
import axios from 'axios';
import "./EditStudent.css"

class EditStudent extends Component {
    constructor(props) {
        super(props)

        this.state =
        {
            id: props.student.id,
            name: props.student.name,
            gpa: props.student.gpa,
            img: props.student.img,
            campusId: props.student.campusId,
            nameIsCorrect: true,
            gpaIsCorrect: true,
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
            campusId: currentStudent.campusId
        })
    }
    
    onChangeHandler = event => {
        this.setState({
                      [event.target.name]: event.target.value
                      })
    }

    handleCampusSelection = event => {
        console.log(event.target.value)
        this.setState({
            campusId: event.target.value
        })
    }
    
    onSubmitHandler = async event => {
        event.preventDefault()
        let correctName = true;
        let correctGPA = true;
        if (this.state.name.length < 1){
            correctName = false;
        }
        for (let i = 0; i < this.state.name.length; i++){
            if (!(this.state.name[i].toLowerCase() != this.state.name[i].toUpperCase() || this.state.name[i] == " ")){
                correctName = false;
            }
        }
        if (this.state.gpa < 0 || this.state.gpa > 4){
            correctGPA = false;
        }
        this.setState({
            nameIsCorrect: correctName,
            gpaIsCorrect: correctGPA
        })
        if (correctName && correctGPA){
            //this.props.editStudent(this.state)
            console.log(this.state.id);
            let url ='http://localhost:5000/api/students/' + this.state.id;
            console.log(url);
            const that = this;
            console.log(that.state);
            await axios.put(url,{
                name: this.state.name,
                gpa : this.state.gpa,
                img : this.state.img,
                campus: this.state.campusId
            })
            .then (res => {
                //let singleStudent = res.body
                this.props.editStudent(that.state);
            })
            .catch(err => console.log(err));
            this.setState({redirect: true})
            window.location.reload(true)
        }
    }
    
    render() {
        if (this.state.redirect) {
            return (
                <Redirect to={"/students/" + this.state.id}/>
            );
        }
        return (
              <div className="StudentAddForm">
                <form className="student-addform" onSubmit={this.onSubmitHandler}>
                  <div className="student-addform-element">
                    <label className="student-addform-label">
                      Name:
                      <input className="campus-addform-input" name="name" type="text" value={this.state.name} onChange={this.onChangeHandler} />
                    </label>
                  </div>
                  <div className="student-addform-element">
                    <label className="student-addform-label">
                      GPA:
                      <input className="campus-addform-input" name="gpa" type="text" value={this.state.gpa} onChange={this.onChangeHandler} />
                    </label>
                  </div>
                  <div className="student-addform-element">
                    <label className="student-addform-label">
                      Image URL:
                      <input className="campus-addform-input" name="img" type="text" value={this.state.img} onChange={this.onChangeHandler} />
                    </label>
                  </div>
				  <div className="student-addform-element">
                    <select className="studentview-buttons" name="campus" onChange={this.handleCampusSelection}>
                      <option className="campus-addform-button" value=''>Select Campus...</option>
                      {this.props.campuses.filter(campus => (campus.id != this.props.student.campusId)).map(campus => (
                          <option className="campus-addform-button student-btns" value={campus.id}>{campus.name}</option>
                      ))}
                    </select>
				    <button className="student-addform-button student-btns">Save Changes</button>
				  </div>
                </form>
                <div className="campus-addform-label color-red">
                  <div>
                    {this.state.nameIsCorrect ? 
                        "" :
                        "Name must be at least one character long and must contain only letters and spaces"}
                  </div>
                  <div>
                    {this.state.gpaIsCorrect ?
                        "":
                        "GPA must be withing the range of 0 and 4"}
                  </div>
                </div>
              </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        students: state.students,
        campuses: state.campuses
    }
}

export default connect(mapStateToProps, {
                       editStudent
                       })(EditStudent)
