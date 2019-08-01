import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import StudentGrid from './components/StudentGrid.js';
import StudentView from './components/StudentView'
import CampusView from './components/CampusView'
import CampusMain from './components/CampusMain'
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

      students: [
        {
          id: 0,
          name: "Neil Tyson",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 2.0,
          college: 0
        },
        {
          id: 1,
          name: "Mike Tyson",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 2.2,
          college: 0
        },
        {
          id: 2,
          name: "Elon Musk",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 2.7,
          college: 0
        },
        {
          id: 3,
          name: "Elizabeth Ryler",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 2.9,
          college: 1
        },
        {
          id: 4,
          name: "Harold Kimp",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 3.3,
          college: 1
        },
        {
          id: 5,
          name: "Michelle Rubin",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 1.0,
          college: 1
        },
        {
          id: 6,
          name: "Kenneth Di",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 0.1,
          college: 1
        },
        {
          id: 7,
          name: "Lolita Lopez",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 3.7,
          college: 1
        },
        {
          id: 8,
          name: "Rain Man",
          img: 'https://d29fhpw069ctt2.cloudfront.net/icon/image/49320/preview.svg',
          gpa: 4.0,
          college: 0
        }
      ],

      selectedCampus: null,
      selectedStudent: null
    }
  }

  render(){
    const CampusMainComponent = () => (<CampusMain campuses={this.state.campuses} />)
    const StudentGridComponent = () => (<StudentGrid students={this.state.students} />);
    const HeaderComponent = () => (<Header />);
    const StudentViewComponent = ({match}) => {
      return (
        <StudentView
          name={this.state.students[match.params.id].name}
          img={this.state.students[match.params.id].img}
          gpa={this.state.students[match.params.id].gpa} />
      )
          }

    const CampusViewComponent = ({match}) => (<CampusView campus={this.state.campuses[match.params.id]}/>)

        return(
          <div id="app">
            <Router>
              <Route exact path = "/" render={HeaderComponent} />
              <Switch>
                <Route exact path = "/students" component={StudentGridComponent} />
                <Route exact path = "/campuses" render={CampusMainComponent}/>
                <Route exact path="/students/:id" render={StudentViewComponent} />
                <Route exact path = "/campuses/:id" render={CampusViewComponent}/>
              </Switch>
            </Router>
          </div>
    )
  }
}

export default App;
