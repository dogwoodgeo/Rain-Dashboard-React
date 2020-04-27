import React from 'react';
import { Container, ListGroup } from 'react-bootstrap/';
import './Events.css';

export default class Events extends React.Component {
  state = {};
  render() {
    return (
      <Container className='mt-1 mb-3'>
        <h4>Rain Events</h4>
        <ListGroup>
          <ListGroup.Item variant='dark'>
            • You are only limited by your imagination.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • La- da- da- da- dah. Just be happy.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • You can create the world you want to see and be a part of.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>• You have that power.</ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Life is too short to be alone, too precious.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Share it with a friend.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Be so very light. Be a gentle whisper.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Poor old tree. Let's give him a friend too.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Everybody needs a friend.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Even trees need a friend. We all need friends.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • Now we can begin working on lots of happy little things.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • You don't have to spend all your time thinking about what you're
            doing, you just let it happen.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • You're the greatest thing that has ever been or ever will be.
            You're special.
          </ListGroup.Item>
          <ListGroup.Item variant='dark'>
            • You're so very special.
          </ListGroup.Item>
        </ListGroup>
      </Container>
    );
  }
}
