import React, {Component} from "react"
import {connect} from 'react-redux';
import {addStudent} from '../../actions';
import {Redirect} from 'react-router';
import axios from 'axios'
import "./StudentAddForm.css"

class StudentAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameIsCorrect: true,
            redirect: false
        }
        this.addStudent = this.addStudent.bind(this);
    }
    
    async addStudent (e) {
        e.preventDefault();
        let correctName = true;
        if (e.target.elements.name.value.length < 1){
            correctName = false;
        }
        for (let i = 0; i < e.target.elements.name.value.length; i++){
            if (!(e.target.elements.name.value[i].toLowerCase() != e.target.elements.name.value[i].toUpperCase() || e.target.elements.name.value[i] == " ")){
                correctName = false;
            }
        }
        this.setState({
            nameIsCorrect: correctName
        })
        if (correctName){
            let student = {
                name: e.target.elements.name.value,
                img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg'
            }
            let url ='http://localhost:5000/api/students';
            await axios.post(url,{
                name: student.name,
                img: student.img
            })
            .then (async res => {
				console.log(res)
				await this.props.addStudent(student);
            })
            .catch(async err => console.log(err));
            await this.setState({redirect: true});
            window.location.reload(true)
        }
    }
    
    render() {
        if (!this.state.redirect) {
            return (
              <div className="StudentAddForm">
                <form className="student-addform" onSubmit={this.addStudent}>
                  <div className="student-addform-element">
                    <label className="student-addform-label">
                      Name:
                      <input className="campus-addform-input" type="text" name="name" />
                    </label>
                  </div>
				  <div className="student-addform-element">
				    <button className="student-addform-button">Submit</button>
				  </div>
                </form>
                <div className="campus-addform-label color-red">
                  {this.state.nameIsCorrect ?
                    "" :
                    "Name must be at least one character long and must contain only letters and spaces"}
                </div>
              </div>
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
