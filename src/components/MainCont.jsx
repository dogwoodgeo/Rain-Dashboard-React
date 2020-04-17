import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './MainCont.css';
import ViewMap from './ViewMap.jsx';
import Gauges from './Gauges.jsx';

export default class MainCont extends React.Component {
  state = {};
  render() {
    return (
      <Container fluid='true'>
        <Row>
          <Col>
            <Gauges />
          </Col>
          <Col>
            <ViewMap />
          </Col>
        </Row>
      </Container>
    );
  }
}
