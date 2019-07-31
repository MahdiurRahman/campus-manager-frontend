import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import StudentGrid from './components/StudentGrid.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={
      campuses: [{
        id: 0,
        name: "Hunter College",
        bio: "Goonie School 1",
        address: "East 68th street, NY",
        img: ''
      },{
        id: 1,
        name: "Baruch College",
        bio: "Goonie School 2",
        address: "Kips bay, NY",
        img: ''
      }],

      students: [{
        id: 0,
        name: "Neil Tyson",
        img: '',
        gpa: 2.0,
        college: 0
      },{
        id: 1,
        name: "Mike Tyson",
        img: '',
        gpa: 2.2,
        college: 0
      },{
        id: 2,
        name: "Elon Musk",
        img: '',
        gpa: 2.7,
        college: 0
      },{
        id: 3,
        name: "Elizabeth Ryler",
        img: '',
        gpa: 2.9,
        college: 1
      },{
        id: 4,
        name: "Harold Kimp",
        img: '',
        gpa: 3.3,
        college: 1
      },{
        id: 5,
        name: "Michelle Rubin",
        img: '',
        gpa: 1.0,
        college: 1
      },{
        id: 6,
        name: "Kenneth Di",
        img: '',
        gpa: 0.1,
        college: 1
      },{
        id: 7,
        name: "Lolita Lopez",
        img: '',
        gpa: 3.7,
        college: 1
      },{
        id: 8,
        name: "Rain Man",
        img: '',
        gpa: 4.0,
        college: 0
      }],

      selectedCampus: 0,
      selectedStudent: ''
    }
  }

  render(){
    const StudentGridComponent = () => (<StudentGrid students={this.state.students} />);
    const HeaderComponent = () => (<Header />);

    return(
      <div id="app">
        <Router>
          <Switch>
            <Route exact path = "/" render={HeaderComponent} />
            <Route exact path = "/students" component={StudentGridComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
