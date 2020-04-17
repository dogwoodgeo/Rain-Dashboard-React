import React, { Component } from 'react';
import './App.css';
import MainCont from './components/MainCont';
import Header from './components/Header.jsx';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <MainCont />
      </React.Fragment>
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
