//* Entry point for React.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//* Main App component for the whole app. Everything below will be a child component.
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

//* Renders the 'App' React component ('App.js')in the 'root' element.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
