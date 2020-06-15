import React from 'react';
import Container from 'react-bootstrap/Container';

export default class About extends React.Component {
  state = {};
  render() {
    return (
      <Container
        className='mt-2'
        style={{ color: '#efefef', textAlign: 'left' }}
      >
        {/* <h4 className='mt-1 mb-3' style={headerStyle}>
          About
        </h4> */}
        <p className='mt-4'>
          This dashboard application displays current and past data from Little
          Rock Water Reclamation Authority's rain gauges.
        </p>
        <h4 style={{ textDecoration: 'bolder', textAlign: 'left' }}>Live</h4>
        <p>This component displays the current rain amounts for all gauges.</p>
        <p>
          The data is updated every two (2) minutes. This is represented by the
          date/time for gauge readings. Amounts are cumulative and zero-out at
          12:00 AM.
        </p>
        <p>
          Gauge graphics with
          <span style={{ color: '#EDD977', fontWeight: 'bold' }}>
            {' '}
            yellow text{' '}
          </span>
          indicate a possible error with data. This may be caused by several
          factors. The error usually rectifies itself in time, but contact LRWRA
          if problem persist for more than one hour.
        </p>
        <p>
          The color of the rain gauge points on the map are synced with the
          color of the gauge graphics based on rain amounts.
        </p>
        <ul>
          <li>
            <span style={{ color: 'white', fontWeight: 'bold' }}>White</span>:
            No rain
          </li>
          <li>
            <span style={{ color: '#309E75', fontWeight: 'bold' }}>Green</span>:
            Rain
          </li>
          <li>
            <span style={{ color: '#3A9AD3', fontWeight: 'bold' }}>Blue</span>:
            Exceeds 2 yr storm event (coming soon).
          </li>
        </ul>
        <h4 style={{ textDecoration: 'bolder', textAlign: 'left' }}>Events</h4>
        <p>Coming soon.</p>
        <p>
          This component will allow you to query rain events by date, or load
          all, and view rain amounts and intensity, and any associated sanitary
          sewer overflows (SSO).
        </p>
        <p id='contact'>
          <a href='mailto:Bradley.Jones@lrwra.com'>Contact</a>
        </p>
      </Container>
    );
  }
}

// const headerStyle = {
//   textAlign: 'center',
//   fontWeight: 'bold',
// };
