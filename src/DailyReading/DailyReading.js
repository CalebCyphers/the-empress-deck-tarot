import React from 'react';
import './DailyReading.css';
import { Col, Row, Image, InputGroup, FormControl, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js'

export default function DailyReading(props) {
  if (!props.card.reversed) {
    return (
      <div>
        <Container>
        <Row>
          <Col>
            <h1>{props.card.numeral}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>{props.card.title}</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>{props.card.theme}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Image width="350em" src={props.card.image} alt={props.card.title} rounded />
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{props.card.description}</p>
          </Col>
        </Row>
        <ReflectionForm journalEntries={props.journalEntries} updateState={props.updateState} card={props.card} />
        </Container>
      </div>
    )
  } else {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <h1>{props.card.numeral}</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>{props.card.title} (reversed)</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>{props.card.theme}</h3>
            </Col>
          </Row>
          <Row>
            <Col>
              <Image width="350em" className="rotateimg180" src={props.card.image} alt={props.card.title} rounded />
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{props.card.description}</p>
            </Col>
          </Row>
          <ReflectionForm journalEntries={props.journalEntries} updateState={props.updateState} card={props.card} />
        </Container>
      </div>
    )
  }
}

DailyReading.propTypes = {
  card: PropTypes.object
}