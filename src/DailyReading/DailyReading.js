import React from 'react';
import './DailyReading.css';
import { Col, Row, Image } from 'react-bootstrap';

export default function DailyReading(props) {
  return (
    <div>
      <Row>
        <Col>
          <Image width="350em" src={props.card.image} alt={props.card.title} rounded />
        </Col>
      </Row>
    </div>
  )
}