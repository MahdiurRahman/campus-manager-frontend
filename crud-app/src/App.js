import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';

class App extends React.Component{
  constructor(props)
  {
    super(props);
    this.state ={

    }
  }

  render(){
    return(
      <div id="app">
        <Header />
      </div>
    )
  }
}

export default App;
