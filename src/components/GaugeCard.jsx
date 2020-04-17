import React from 'react';
import Card from 'react-bootstrap/Card';

export default function GaugeCard({ data }) {
  return (
    <Card
      className='h-100 rounded m-1'
      style={{ background: '#2A2A28', width: '9rem' }}
    >
      <Card.Header
        className='text-center font-weight-bold text-nowrap'
        style={{ background: '#141414', color: '#e4e4e4' }}
      >
        {data.name}
      </Card.Header>
      <Card.Body className='p-1'>
        <Card.Text
          className='text-center text-muted m-0'
          style={{ color: '#e4e4e4', fontSize: '11px' }}
        >
          {data.timestamp}
        </Card.Text>
        <Card.Text
          className='text-center font-weight-bold m-0'
          style={{ color: '#e4e4e4', fontSize: '40px' }}
        >
          {data.value}"
        </Card.Text>
        <Card.Text
          className='text-center text-muted'
          style={{ color: '#e4e4e4' }}
        >
          ▲ {data.change}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
