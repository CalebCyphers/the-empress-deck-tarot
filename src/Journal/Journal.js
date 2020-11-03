import React from 'react';
import './Journal.scss';
import { Col, Row, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Journal(props) {
    return (
      <div className='journalEntries'>
        {props.journalEntries.map((entry) => {
          const entryId = entry.id;
          return (
            <p>
              <Link className='entry-link' key={entry.id} to={'/journal/'+entryId}>{`reading for ${entry.date}`}</Link> 
            </p>
          )
        })
        }
      </div>
    )
}

Journal.propTypes = {
  journalEntries: PropTypes.array
}