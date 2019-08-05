import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import StudentGrid from './components/StudentGrid.js';
import StudentView from './components/StudentView'
import CampusView from './components/CampusView'
import CampusMain from './components/CampusMain'
import CampusAddForm from './components/CampusAddForm'
import StudentMain from './components/StudentMain';
import StudentAddForm from './components/StudentAddForm';
import EditCampus from './components/EditCampus'
import EditStudent from './components/EditStudent';
import {connect} from "react-redux"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      selectedCampus: null,
      selectedStudent: null
    }
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
    console.log(this.props.campuses);
    
    let component = this.props
    return(
      <div id="app">
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
                        students={component.students.filter(student => (student.college == campus.id))} />
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

export default connect(getStateToProps)(App);
