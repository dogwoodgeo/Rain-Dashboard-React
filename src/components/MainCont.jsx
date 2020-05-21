import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import './MainCont.css';
import ViewMap from './ViewMap';
import DataContainer from './DataContainer';
import EventData from './event-data.json';

export default class MainCont extends React.Component {
  state = {
    gauges: [],
    events: EventData,
  };

  componentDidMount() {
    this.fetchCurrentValues();
    setInterval(() => {
      this.fetchCurrentValues();
    }, 120000);
  }

  fetchCurrentValues = () => {
    queryFeatures({
      url:
        'https://gis.lrwu.com/server/rest/services/RainGauges/Rain_Gauges/FeatureServer/3/',
      where: '1=1',
      outFields: '*',
      f: 'json',
    })
      .then((resQuery) => this.setState({ gauges: resQuery.features }))
      .catch(function (error) {
        console.log(error);
      });
    let updateTime = new Date();
    console.log(`Updated data fetch - ${updateTime.toLocaleTimeString()}`);
  };

  render() {
    return (
      <Container fluid='true'>
        <Row>
          <Col style={colStyle}>
            <DataContainer gauges={this.state.gauges} />
          </Col>
          <Col style={colStyle}>
            <ViewMap gauges={this.state.gauges} />
          </Col>
        </Row>
      </Container>
    );
  }
}

const colStyle = {
  m: 0,
  p: 0,
};
