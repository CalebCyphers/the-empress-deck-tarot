import React from 'react';
import './DailyReading.css';
import { Col, Row, Image } from 'react-bootstrap';

export default function DailyReading(props) {
  if (!props.card.reversed) {
    return (
      <div>
        <Row>
          <Col>
            <Image width="350em" src={props.card.image} alt={props.card.title} rounded />
          </Col>
        </Row>
      </div>
    )
  } else {
    return (
      <div>
        <Row>
          <Col>
            <Image width="350em" className="rotateimg180" src={props.card.image} alt={props.card.title} rounded />
          </Col>
        </Row>
      </div>
    )
  }
}