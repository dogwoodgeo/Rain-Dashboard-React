import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Route, Switch, Link } from 'react-router-dom';
import './DataContainer.css';
import Header from './Header';
import Live from './pages/Live';
import Events from './pages/Events';
import About from './pages/About';
//? Define PropTypes????

//TODO Remove the Nav element to its own component???
//TODO Add tool tips to the links.
//TODO Reconcile the "You should not use <Route component> and <Route children> in the same route;" warning...
//TODO ..Need the nested component for the props.

export default class DataContainer extends React.Component {
  render() {
    return (
      <Container
        fluid='true'
        id='data-container'
        style={{ background: '#32322F', overflow: 'scroll' }}
        variant='dark'
      >
        <Header />
        <Nav justify variant='tabs' defaultActiveKey='Live'>
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
            <Events events={this.props.events} />
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
  borderRadius: 0,
};
