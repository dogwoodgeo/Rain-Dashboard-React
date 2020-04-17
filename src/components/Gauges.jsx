import React from 'react';
import { Container, Col, Row, CardDeck } from 'react-bootstrap';
import './Gauges.css';
import GaugeCard from './GaugeCard.jsx';
import GaugeData from '../data.json';

export default class Gauges extends React.Component {
  state = {};
  render() {
    return (
      <Container
        fluid='true'
        id='gauges-container'
        style={{ background: '#32322F' }}
        variant='dark'
      >
        <Row className='mb-2'>
          <Col>
            <h3>GAUGES</h3>
          </Col>
        </Row>
        <Row className='text-center' style={{ color: '#e4e4e4' }}>
          <Col>
            <p>Live | About</p>
          </Col>
        </Row>
        <CardDeck className='d-flex flex-row flex-wrap ml-2 mr-2 mt-3 justify-content-around'>
          {GaugeData.map((data) => (
            <Col className='mb-3' xs={123} key={`${data.tag}`}>
              <GaugeCard data={data} />
            </Col>
          ))}
        </CardDeck>
      </Container>
    );
  }
}
