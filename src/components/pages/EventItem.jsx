import React from 'react';
import { ListGroup, Col, Row, Badge } from 'react-bootstrap';

export default class EventItem extends React.Component {
  render() {
    const { DATE, DURATION, SSO_NUM, STORM_YR } = this.props.event;

    const setSSOCount = (number) => {
      if (number !== 0) return `SSO: ${number}`;
    };

    return (
      <ListGroup.Item action variant='dark'>
        <Row>
          <Col>
            <h5 style={h4Style}>{DATE}</h5>
            <p style={durStyle}>{`${DURATION} Hours`}</p>
            <Badge style={{ color: '#e4e4e4', backgroundColor: '#CB2240' }}>
              {setSSOCount(SSO_NUM)}
            </Badge>
          </Col>
          <Col>
            {/* <p
              style={{
                marginTop: '20px',
                fontWeight: 'bold',
                fontSize: '30px',
                color: 'white',
                backgroundColor: '#2F7DAB',
              }}
            > */}
            <Badge
              style={{
                marginTop: '15px',
                fontWeight: 'bold',
                fontSize: '30px',
                color: '#e4e4e4',
                backgroundColor: '#3A9AD3',
              }}
            >
              {STORM_YR}
            </Badge>
            {/* </p> */}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  }
}
const h4Style = { marginBottom: '0' };
const durStyle = { fontWight: 'normal', marginBottom: '0' };
