import React from 'react';
import {
  Container,
  Col,
  ListGroup,
  InputGroup,
  FormControl,
  Button,
  Accordion,
  Card,
} from 'react-bootstrap/';
import EventItem from './EventItem';
import './Events.css';

export default class Events extends React.Component {
  state = {};
  render() {
    return (
      <Container>
        <Col className='mt-2 text-center'>
          <Accordion defaultActiveKey='1'>
            <Card
              style={{
                backgroundColor: '#32322F',
                borderRadius: 0,
                borderWidth: 0,
              }}
            >
              <Card.Header style={{ backgroundColor: '#32322F' }}>
                <Accordion.Toggle
                  as={Button}
                  variant='light'
                  size='sm'
                  eventKey='0'
                >
                  Query by date
                </Accordion.Toggle>
              </Card.Header>

              <Accordion.Collapse eventKey='0'>
                <Card.Body style={{ backgroundColor: '#C6C8CA' }}>
                  <InputGroup size='sm' className='mb-3'>
                    <InputGroup.Prepend>
                      <InputGroup.Text
                        style={{ color: '#e4e4e4', backgroundColor: '#32322F' }}
                      >
                        Enter dates
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type='date' />
                    <FormControl type='date' />
                  </InputGroup>
                  <Button
                    className='mb-0'
                    variant='light'
                    size='sm'
                    style={{ color: '#32322F' }}
                  >
                    Run query
                  </Button>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
          {/* <p style={{ color: 'white', margin: '0' }}>
            ______________________________________________
          </p> */}
          <h5 style={h4Style} className='mb-2 mt-1'>
            Events for current year
          </h5>
          {this.props.events.map((event) => (
            <ListGroup variant='flush' key={event.ID} className='text-left'>
              <EventItem event={event} />
            </ListGroup>
          ))}
        </Col>
      </Container>
    );
  }
}
const h4Style = { textAlign: 'center', color: '#efefef' };
