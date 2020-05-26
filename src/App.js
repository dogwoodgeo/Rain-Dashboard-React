import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import MainCont from './components/MainCont';

class App extends Component {
  render() {
    return (
      <Router>
        <MainCont />
      </Router>
    );
  }
}
export default App;
