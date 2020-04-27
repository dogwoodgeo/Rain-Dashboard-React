import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './MainCont.css';
import ViewMap from './ViewMap';
import DataContainer from './DataContainer';
import LiveData from './pages/live-data.json';

export default class MainCont extends React.Component {
  state = {
    gauges: LiveData,
  };

  render() {
    return (
      <Container fluid='true'>
        <Row>
          <Col>
            <DataContainer gauges={this.state.gauges} />
          </Col>
          <Col>
            <ViewMap gauges={this.state.gauges} />
          </Col>
        </Row>
      </Container>
    );
  }
}
