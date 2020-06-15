import React from 'react';
import { ListGroup, Col, Row, Badge } from 'react-bootstrap';

export default class EventItem extends React.Component {
  render() {
    const { DATE, DURATION, SSO, SSO_NUM, STORM, STORM_YR } = this.props.event;

    const setSSOCount = (ssoPresent, ssoNumber) => {
      if (ssoPresent === 'Yes')
        return (
          <Badge style={{ color: '#e4e4e4', backgroundColor: '#CB2240' }}>
            SSO: {ssoNumber}
          </Badge>
        );
      else if (ssoPresent === 'Unk')
        return (
          <Badge style={{ color: '#606060', backgroundColor: '#EDD977' }}>
            SSO reporting can take up to 72hrs
          </Badge>
        );
    };

    const setStormYear = (isStorm, stormYear) => {
      if (isStorm === 'Yes') {
        if (stormYear === '1-Year Storm') {
          return (
            <Badge
              style={{
                marginTop: '5px',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#e4e4e4',
                backgroundColor: '#309E75',
              }}
            >
              {STORM_YR}
            </Badge>
          );
        } else {
          return (
            <Badge
              style={{
                marginTop: '5px',
                fontWeight: 'bold',
                fontSize: '20px',
                color: '#e4e4e4',
                backgroundColor: '#3A9AD3',
              }}
            >
              {STORM_YR}
            </Badge>
          );
        }
      }
    };

    return (
      <ListGroup.Item action variant='dark'>
        <Row>
          <Col>
            <h5 style={h4Style}>{DATE}</h5>
            <p style={durStyle}>{`${DURATION} Hours`}</p>
            {setSSOCount(SSO, SSO_NUM)}
          </Col>
          <Col>{setStormYear(STORM, STORM_YR)}</Col>
        </Row>
      </ListGroup.Item>
    );
  }
}
const h4Style = { marginBottom: '0' };
const durStyle = { fontWight: 'normal', marginBottom: '0' };
