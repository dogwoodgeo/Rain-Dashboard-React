import React from 'react';
import Container from 'react-bootstrap/Container';
import './ViewMap.css';
import { loadModules } from 'esri-loader';

export default class ViewMap extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    loadModules(
      [
        'esri/Map',
        'esri/views/MapView',
        'esri/Basemap',
        'esri/layers/FeatureLayer',
        'esri/widgets/Home',
      ],
      {
        //! Don't know what/how this does/works?
        css: true,
      }
    ).then(([Map, MapView, Basemap, FeatureLayer, Home]) => {
      //* Light Symbol
      const lightSymbol = {
        type: 'simple-marker',
        outline: { color: '#0D1C2B', width: 1 },
        size: 13,
        color: '#EBEBEB',
      };

      //* LIGHT LABELS
      const lightLabels = {
        symbol: {
          type: 'text',
          color: '#EBEBEB',
          haloColor: '#0D1C2B',
          haloSize: 1,
          font: {
            family: 'sans-serif',
            size: 13,
            weight: 'bold',
          },
        },
        labelPlacement: 'above-center',
        labelExpressionInfo: {
          expression: '$feature.NAME',
        },
      };

      //* Symbol Renderer
      let simpleRenderer = {
        type: 'simple',
        symbol: lightSymbol,
      };

      //* Using the LRWRA 'Dark' vector tile basemap
      const darkBasemap = new Basemap({
        portalItem: {
          id: 'c3aafafc736e42918d2750a54a656471',
          portal: 'https://gis.lrwu.com/portal',
        },
      });

      //* Create the Layer objects
      const rainBasinsLayer = new FeatureLayer({
        url:
          'https://gis.lrwu.com/server/rest/services/RainGauges/Rain_Gauges/FeatureServer/1',
      });
      const rainGaugesLayer = new FeatureLayer({
        url:
          'https://gis.lrwu.com/server/rest/services/RainGauges/Rain_Gauges/FeatureServer/0',
        labelingInfo: [lightLabels],
        renderer: simpleRenderer,
      });

      const map = new Map({
        basemap: darkBasemap,
        layers: [rainBasinsLayer, rainGaugesLayer],
      });

      this.view = new MapView({
        container: this.mapRef.current,
        map: map,
        center: [-92.356121, 34.725],
        zoom: 11,
      });

      //* Home widget object
      var home = new Home({
        view: this.view,
      });
      //* Add the Home widget to the view
      this.view.ui.add(home, 'top-left');
    });
  }

  componentWillUnmount() {
    if (this.view) {
      //* Destroy the map view
      this.view.container = null;
    }
  }

  render() {
    return (
      <Container id='map-container' fluid='true'>
        <div className='ViewMap' ref={this.mapRef} />
      </Container>
    );
  }
}
// export default WebMap;
