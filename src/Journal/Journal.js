import React from 'react';
import { Col, Row, Image, Card } from 'react-bootstrap';
import './Journal.scss';
import { Col, Row, Card } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

export default function Journal(props) {
    return (
      <div className='main'>
        {props.journalEntries.map((entry) => {
          const entryId = entry.id;
          const entryDate = new Date(entry.id);
          const entryDateString = entryDate.toString().substr(4, 11);
          return (
            <section className='journal-entry' key="entry.id">
              <Row className="justify-content-md-center">
                <Col md="auto">
                  <Card className="mb-2" bg="dark" >
                    <Card.Img variant="top" src={entry.card.image} />
                    <Card.Body className='card-body'>
                      <Card.Title>
                      <p className='entry-text'>{entry.text}</p>
                      </Card.Title>
                      <p className='entry-date'>{entryDateString}</p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </section>
          )
        })
        }
      </div>
    )
}

Journal.propTypes = {
  journalEntries: PropTypes.array
}
