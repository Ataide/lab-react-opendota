import React, { Component } from 'react';
import Stats from './components/StatsContainer'  
import Search from './components/searchContainer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OpenDota with ReactJS</h1>
        </header>

        <Search/>
        
            

      </div>
    );
  }
}

export default App;
