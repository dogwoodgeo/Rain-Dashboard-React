import React from 'react';
import { Container, ListGroup } from 'react-bootstrap/';
import EventItem from './EventItem';
import './Events.css';

export default class Events extends React.Component {
  state = {};
  render() {
    return (
      <Container className='mb-3'>
        <h4 style={h4Style} className='mt-3 mb-3'>
          Rain Events
        </h4>
        {this.props.events.map((event) => (
          <ListGroup variant='flush' key={event.ID}>
            <EventItem event={event} />
          </ListGroup>
        ))}
      </Container>
    );
  }
}
const h4Style = { textAlign: 'center', color: '#efefef' };
