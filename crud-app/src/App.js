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
    const StudentMainComponent = () => (<StudentMain students={this.props.students} campuses={this.props.campuses} getCampusName={this.getCorrespondingCampusName} />);
    const HeaderComponent = () => (<Header />);
    const StudentViewComponent = ({match}) => {
      return (
        <StudentView
          name={this.props.students[match.params.id].name}
          img={this.props.students[match.params.id].img}
          gpa={this.props.students[match.params.id].gpa} />
      )
          }

    const CampusViewComponent = ({match}) => (<CampusView 
                                                campus={this.props.campuses[match.params.id]}
                                                students={this.props.students.filter(student => (student.college == match.params.id))}
                                              />);

	const CampusAddFormComponent = () => (<CampusAddForm campuses={this.props.campuses}/>);
  const StudentAddFormComponent = () => <StudentAddForm students={this.props.students} />;
  const CampusEditForms = ({match}) => (
    <EditCampus campus={this.props.campuses[match.params.id]} />
  )
	console.log(this.props.campuses);
        
        return(
          <div id="app">
            <Router>
              <Route exact path = "/" render={HeaderComponent} />
              <Switch>
                <Route exact path = "/students" component={StudentMainComponent} />
                <Route exact path = "/campuses" render={CampusMainComponent}/>
                <Route exact path="/students/:id" render={StudentViewComponent} />
                <Route exact path = "/campuses/:id" render={CampusViewComponent}/>
                <Route exact path="/campuses/:id/edit" render={CampusEditForms} />
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
