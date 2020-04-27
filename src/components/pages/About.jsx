import React from 'react';
import Container from 'react-bootstrap/Container';

export default class About extends React.Component {
  state = {};
  render() {
    return (
      <Container
        className='mt-auto'
        style={{ color: '#efefef', textAlign: 'center' }}
      >
        <h4>About</h4>
        <p>
          We have no limits to our world. We're only limited by our imagination.
          Automatically, all of these beautiful, beautiful things will happen.
          We spend so much of our life looking - but never seeing. If we're
          going to have animals around we all have to be concerned about them
          and take care of them.
        </p>
        <br />
        <p>
          You want your utility to have some character. Make it special. In your
          imagination you can go anywhere you want. I thought today we would
          make a happy little overflow that's just running through the woods
          here. No worries. No cares. Just float and wait for the wind to blow
          you around. I'm a wastewater fanatic. I love wastewater,.
        </p>
      </Container>
    );
  }
}
