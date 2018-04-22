import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './components/mainContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainContainer />       
      </BrowserRouter>    
    );
  }
}

export default App;
