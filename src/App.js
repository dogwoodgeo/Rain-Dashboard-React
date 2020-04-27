import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import MainCont from './components/MainCont';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <MainCont />
      </Router>
    );
  }
}
export default App;

// function App() {
//   return (
//     <div className='App'>
//       <ViewMap />
//     </div>
//   );
// }
//export default App;
