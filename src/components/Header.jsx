import React from 'react';
import './Header.css';
import Logo from '../assets/favicon.ico';
import { Nav, Navbar } from 'react-bootstrap';

//* Dark gray hex: '#2A2A28'
//* Light gray hex: '#32322F'

class Header extends React.Component {
  render() {
    return (
      <Navbar
        style={{ background: '#32322F' }}
        variant='dark'
        className='justify-content-center'
        // expand='sm'
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
        {/* <div id='div'>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link target='_blank' href='http://www.lrwra.com'>
                Home
              </Nav.Link>
              <Nav.Link target='_blank' href='https://gis.lrwu.com/maps'>
                Maps
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div> */}
      </Navbar>
    );
  }
}

export default Header;
