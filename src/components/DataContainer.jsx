import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import './DataContainer.css';
import Live from './pages/Live';
import Events from './pages/Events';
import About from './pages/About';
//? Define PropTypes????

//TODO Remove the Nav element to its own component???
//TODO Add tool tips to the links.
export default class DataContainer extends React.Component {
  render() {
    return (
      <Container
        fluid='true'
        id='data-container'
        style={{ background: '#32322F' }}
        variant='dark'
      >
        <Nav
          justify
          variant='tabs dark'
          defaultActiveKey='Live'
          // className='justify-content-center'
        >
          <Nav.Item>
            <Nav.Link eventKey='Live' as={Link} to='/' style={linkStyle}>
              Live
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey='Events'
              as={Link}
              to='/events'
              style={linkStyle}
            >
              Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='About' as={Link} to='/about' style={linkStyle}>
              About
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route exact path='/' component={Live}>
            <Live gauges={this.props.gauges} />
          </Route>
          <Route path='/events' component={Events}>
            <Events />
          </Route>
          <Route path='/about' component={About}>
            <About />
          </Route>
        </Switch>
      </Container>
    );
  }
}

const linkStyle = {
  color: '#969696',
};
