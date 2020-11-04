import React from 'react';
// import './Journal.scss';
import { Col, Row, Image, Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Journal(props) {
    return (
      <div>
        {props.journalEntries.map((entry) => {
          const entryId = entry.id;
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
