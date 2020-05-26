import React from 'react';
import './Header.css';
import Logo from '../assets/favicon.ico';
import { Navbar } from 'react-bootstrap';

//* Dark gray hex: '#2A2A28'
//* Light gray hex: '#32322F'

export default class Header extends React.Component {
  render() {
    return (
      <Navbar
        style={{ background: '#32322F' }}
        variant='dark'
        className='justify-content-center'
      >
        <Navbar.Brand>
          <img
            id='logo'
            src={Logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt='LRWRA Logo'
          />
        </Navbar.Brand>
        <Navbar.Brand style={{ fontSize: 26 }}>
          LRWRA Rain Dashboard
        </Navbar.Brand>
      </Navbar>
    );
  }
}
