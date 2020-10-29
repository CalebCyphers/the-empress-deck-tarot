import React from 'react';
import './DailyReading.css';
import { Col, Row, Image } from 'react-bootstrap';

export default function DailyReading(props) {
  if (!props.card.reversed) {
    return (
      <div>
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
      </div>
    )
  } else {
    return (
      <div>
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
      </div>
    )
  }
}