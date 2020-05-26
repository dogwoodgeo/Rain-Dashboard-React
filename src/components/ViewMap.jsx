import React from 'react';
import { Container } from 'react-bootstrap';
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
        'esri/renderers/UniqueValueRenderer',
        'esri/widgets/Home',
      ],
      {
        css: true,
      }
    ).then(
      ([Map, MapView, Basemap, FeatureLayer, UniqueValueRenderer, Home]) => {
        // const { TAGNAME, VALUE } = this.props.gauge.attributes

        //! buildWhereClause function
        //! -------------------------
        const buildWhereClause = (array) => {
          let whereClause = 'TAG IN (';
          if (array.length === 0) {
            whereClause = whereClause.concat(')');
          } else if (array.length === 1) {
            array.forEach((element) => {
              let gaugeTag = "'" + element + "')";
              whereClause = whereClause.concat(gaugeTag);
            });
          } else {
            array.forEach((element) => {
              if (array.indexOf(element) === 0) {
                let gaugeTag = "'" + element + "'";
                whereClause = whereClause.concat(gaugeTag);
              } else if (array.indexOf(element) + 1 < array.length) {
                let gaugeTag = ",'" + element + "'";
                whereClause = whereClause.concat(gaugeTag);
              } else if (array.indexOf(element) + 1 === array.length) {
                let gaugeTag = ",'" + element + "')";
                whereClause = whereClause.concat(gaugeTag);
              }
            });
          }
          console.log(whereClause);
          return whereClause;
        };

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

        //* Array of uniqueValueInfos property for UniqueValueRenderer
        let uvInfos = [];

        //* Hold TAGNAMEs that will be used to build 'where clauses'
        let gaugesNoRain = [];
        let gaugesRain = [];

        //* Hold the label classes passed into rainGaugesLayer.labelingInfo
        // let labelInfoArray = [];

        //* Map gauge props to populate the arrays above
        // eslint-disable-next-line array-callback-return
        this.props.gauges.map((gauge) => {
          //* Check if rain gauge has measure rain
          if (gauge.attributes.VALUE === 0) {
            //* Push 'NO RAIN' object to uvInfo array for UniqueValueRenderer
            uvInfos.push({
              value: gauge.attributes.TAGNAME,
              symbol: noRainSymbol,
            });
            //* Push TAGNAME to gaugesNoRain array
            gaugesNoRain.push(gauge.attributes.TAGNAME);
          } else {
            //* Push 'RAIN' object to uvInfo array for UniqueValueRenderer
            uvInfos.push({
              value: gauge.attributes.TAGNAME,
              symbol: rainSymbol,
            });
            //* Push TAGNAME to gaugesNoRain array
            gaugesRain.push(gauge.attributes.TAGNAME);
          }
        });

        const whereNoRain = buildWhereClause(gaugesNoRain);
        const whereRain = buildWhereClause(gaugesRain);

        //* NO RAIN LABEL CLASS
        const noRainLabelClass = {
          symbol: {
            type: 'text',
            color: '#EBEBEB',
            haloColor: '#32322F',
            haloSize: 1,
            font: {
              family: 'sans-serif',
              size: 13,
              weight: 'bold',
            },
          },
          labelPlacement: 'above-center',
          where: whereNoRain,
          labelExpressionInfo: {
            expression: 'upper($feature.NAME)',
          },
        };

        //* RAIN LABEL CLASS
        const rainLabelClass = {
          symbol: {
            type: 'text',
            color: '#E4E4E4',
            haloColor: '#309E75',
            haloSize: 1,
            font: {
              family: 'sans-serif',
              size: 13,
              weight: 'bold',
            },
          },
          labelPlacement: 'above-center',
          where: whereRain,
          labelExpressionInfo: {
            expression: 'upper($feature.NAME)',
          },
        };

        let rainGaugesRenderer = new UniqueValueRenderer({
          //type: 'unique-value',
          field: 'TAG',
          defaultSymbol: noRainSymbol,
          uniqueValueInfos: uvInfos,
        });

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
          labelingInfo: [noRainLabelClass, rainLabelClass],
          renderer: rainGaugesRenderer,
        });

        //* Map object
        const map = new Map({
          basemap: darkBasemap,
          layers: [rainBasinsLayer, rainGaugesLayer],
        });

        //* MapView object
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
      }
    );
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
