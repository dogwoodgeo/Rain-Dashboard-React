import React from 'react';
import { Container, Col, CardDeck, Row, Button } from 'react-bootstrap';
import './Live.css';
import GaugeCard from './GaugeCard';
//? Define PropTypes????

//TODO Set the 'live-container' to scroll
export default class Live extends React.Component {
  render() {
    return (
      <Container
        fluid='true'
        style={{ background: '#32322F' }}
        id='live-container'
        variant='dark'
      >
        <Row className='mt-3 mb-3'>
          <Col className='text-center'>
            {/* <h4 style={h4Style}>Rain Gauges • Live</h4> */}
            <Button variant='light' size='sm' style={{ color: '#32322F' }}>
              Check Rain Curve
            </Button>
          </Col>
        </Row>
        <CardDeck className='d-flex flex-row flex-wrap ml-2 mr-2 mt-1 justify-content-around'>
          {this.props.gauges.map((gauge) => (
            <Col className='mb-3' xs={123} key={gauge.attributes.TAGNAME}>
              <GaugeCard gauge={gauge} />
            </Col>
          ))}
        </CardDeck>
      </Container>
    );
  }
}

// const h4Style = { textAlign: 'center', color: '#e4e4e4' };
