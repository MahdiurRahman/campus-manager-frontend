import React from 'react';
import './App.css';
import Header from './components/Header';
import StudentView from './components/StudentTab/StudentView'
import CampusView from './components/CampusTab/CampusView'
import CampusMain from './components/CampusTab/CampusMain'
import CampusAddForm from './components/CampusTab/CampusAddForm'
import StudentMain from './components/StudentTab/StudentMain';
import StudentAddForm from './components/StudentTab/StudentAddForm';
import EditCampus from './components/CampusTab/EditCampus'
import EditStudent from './components/StudentTab/EditStudent';
import {connect} from "react-redux";
import axios from 'axios';
import {addStudent} from './actions';
import {addCampus} from './actions';
import {editStudent} from './actions';
import {editCampus} from './actions';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      selectedCampus: null,
      selectedStudent: null,
    students: [],
    campuses: []
    }
      this.getStudents = this.getStudents.bind(this);
      this.getCampuses = this.getCampuses.bind(this);
  }
    
    componentDidMount(){
        this.getCampuses();
        this.getStudents();
    }
    
    async getStudents(){
        await axios.get('http://localhost:3003/api/students')
        .then (response => {
               let result = response.data;
               for (let i = 0; i < result.length; i++){
                this.props.addStudent(result[i]);
               }
               })
        .catch(err => console.log(err));
    }
    
    async getCampuses(){
        await axios.get('http://localhost:3003/api/campuses')
        .then (response => {
               let result = response.data;
               for (let i = 0; i < result.length; i++){
                this.props.addCampus(result[i]);
               }
               })
        .catch(err => console.log(err));
    }

  getCorrespondingCampusName = (campusId) =>{
  	for (let i = 0; i < this.props.campuses.length; i++){
  		if (this.props.campuses[i].id === campusId){
  			return this.props.campuses[i].name;
  		}
  	}
  }

  render(){
    const CampusMainComponent = () => (<CampusMain campuses={this.props.campuses} />);
    const StudentMainComponent = () => (<StudentMain students={this.props.students} />);
    const HeaderComponent = () => (<Header />);
	  const CampusAddFormComponent = () => (<CampusAddForm campuses={this.props.campuses}/>);
    const StudentAddFormComponent = () => <StudentAddForm students={this.props.students} />;
    
    let component = this.props
    return(
      <div className="App" id="app">
        <Router>
          <Route path = "/" render={HeaderComponent} />
          <Switch>
            <Route exact path = "/students" component={StudentMainComponent} />
            <Route exact path = "/campuses" render={CampusMainComponent}/>

            {this.props.students.map(student => {
              return (
                <Route exact path={"/students/" + student.id}
                  render={() => {
                    return (
                      <StudentView
                        student_id={student.id}
                      />
                    )
                  }}
                />
              )
            })}

            {this.props.campuses.map(campus => {
              return (
                <Route exact path={"/campuses/" + campus.id} 
                  render={() => {
                    return (
                      <CampusView
                        campus_id={campus.id}
                        students={component.students.filter(student => (student.campusId == campus.id))} />
                    )
                  }}
                />
              )
            })}

            {this.props.campuses.map(campus => {
              return(
                <Route exact path={"/campuses/" + campus.id + "/edit"}
                  render={() => {
                    return (
                      <EditCampus campus={campus} />
                    )
                  }}
                  />
              )
            })}
           
           {this.props.students.map(student => {
                                    return(
                                           <Route exact path={"/students/" + student.id + "/edit"}
                                           render={() => {
                                           return (
                                                   <EditStudent student={student} />
                                                   )
                                           }}
                                           />
                                           )
                                    })}

            <Route exact path = "/campusAddForm" render={CampusAddFormComponent}/>
            <Route exact path = "/studentAddForm" render={StudentAddFormComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const getStateToProps = (state) => {
	// from redux to props
	return {
    campuses: state.campuses,
    students: state.students
    };
}

export default connect(getStateToProps, {
                       addStudent,
                       addCampus,
                       editStudent,
                       editCampus
                       })(App);
