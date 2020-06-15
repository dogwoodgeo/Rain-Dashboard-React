import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { queryFeatures } from '@esri/arcgis-rest-feature-layer';
import ViewMap from './ViewMap';
import DataContainer from './DataContainer';
import EventData from './event-data.json';

export default class MainCont extends React.Component {
  state = {
    gauges: [],
    events: EventData,
    uvInfos: [],
  };

  componentDidMount() {
    this.fetchCurrentValues()
      .then(this.setMapSymbolState)
      .catch((err) => console.log(err));
    setInterval(() => {
      this.fetchCurrentValues()
        .then(this.setMapSymbolState)
        .catch((err) => console.log(err));
    }, 120000);
  }

  //! fetchCurrentValues
  //! -------------------------
  //* An async function so I could chain setMapSymbolState to it
  fetchCurrentValues = async () => {
    try {
      const resQuery = await queryFeatures({
        url:
          'https://gis.lrwu.com/server/rest/services/RainGauges/Rain_Gauges/FeatureServer/3/',
        where: '1=1',
        outFields: '*',
        f: 'json',
        orderByFields: 'TAGNAME',
      });
      this.setState({ gauges: resQuery.features });
    } catch (error) {
      console.log(error);
    }
    let updateTime = new Date();
    console.log(`Data fetch - ${updateTime.toLocaleTimeString()}`);
  };

  //! setMapSymbolState
  //! -------------------------
  setMapSymbolState = () => {
    //* Array of uniqueValueInfos property for UniqueValueRenderer
    let uvInfosArray = [];

    //* No Rain Symbol
    const noRainSymbol = {
      type: 'simple-marker',
      outline: { color: '#32322F', width: 0.5 },
      size: 13,
      color: '#EBEBEB',
    };

    //* Rain Symbol
    const rainSymbol = {
      type: 'simple-marker',
      outline: { color: '#E4E4E4', size: 1 },
      size: 13,
      color: '#309E75',
    };

    //* Never enters this code block -- nothing in this.state.gauges
    this.state.gauges.forEach((gauge) => {
      if (gauge.attributes.VALUE === 0) {
        uvInfosArray.push({
          value: gauge.attributes.TAGNAME,
          symbol: noRainSymbol,
        });
      } else {
        //* Push 'RAIN' object to uvInfo array for UniqueValueRenderer
        uvInfosArray.push({
          value: gauge.attributes.TAGNAME,
          symbol: rainSymbol,
        });
      }
    });
    this.setState({ uvInfos: uvInfosArray });
  };

  render() {
    return (
      <Container fluid='true'>
        <Row>
          <Col>
            <DataContainer
              gauges={this.state.gauges}
              events={this.state.events}
            />
          </Col>
          <Col>
            <ViewMap
              gauges={this.state.gauges}
              events={this.state.events}
              uvInfos={this.state.uvInfos}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
