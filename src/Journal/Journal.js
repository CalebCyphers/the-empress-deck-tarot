import React from 'react';
import { Col, Row, Image, Card } from 'react-bootstrap';
import './Journal.scss';
import { PropTypes } from 'prop-types';

export default function Journal(props) {
    return (
      <div>
        {props.journalEntries.map((entry) => {
          return (
              <Row className="justify-content-md-center" key={entry.id}>
                <Col md="auto">
                  <Card className="mb-2" bg="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={entry.card.image} />
                    <Card.Body>
                      <Card.Title>
                        {entry.text}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
          )
        })
        }
      </div>
    )
}

Journal.propTypes = {
  journalEntries: PropTypes.array
}
