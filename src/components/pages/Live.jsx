import React from 'react';
import { Container, Col, CardDeck, Row } from 'react-bootstrap';
import './Live.css';
import GaugeCard from './GaugeCard';
//? Define PropTypes????

//TODO Get the 'live-container' to scroll
export default class Live extends React.Component {
  render() {
    return (
      <Container
        fluid='true'
        style={{ background: '#32322F' }}
        id='live-container'
        variant='dark'
      >
        <Row className='mt-3 mb-2'>
          <Col>
            <h4 style={h4Style}>Rain Gauges • Live</h4>
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

const h4Style = { textAlign: 'center', color: '#e4e4e4' };
