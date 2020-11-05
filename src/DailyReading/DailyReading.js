import React from 'react';
import './DailyReading.scss';
import { Col, Row, Image, InputGroup, FormControl, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import ReflectionForm from '../ReflectionForm/ReflectionForm.js'

export default function DailyReading(props) {
  if (!props.card.reversed) {
    return (
      <div className='individual-card'>
        <p className='daily-card-numeral'>{props.card.numeral}</p>
        <p className='daily-card-title'>{props.card.title}</p>
        <img className='daily-card-image' src={props.card.image} alt={props.card.title} />
        <p className='daily-card-theme'>{props.card.theme}</p>
        <p className='daily-card-description'>{props.card.description}</p>
        <ReflectionForm journalEntries={props.journalEntries} updateState={props.updateState} card={props.card} />
      </div>
    )
  } else {
    return (
      <div className='individual-card'>
        <p className='daily-card-numeral'>{props.card.numeral}</p>
        <p className='daily-card-title'>{props.card.title}</p>
        <p className='reverse-status'>REVERSED</p>
        <img className='daily-card-image-reversed' src={props.card.image} alt={props.card.title} />
        <p className='daily-card-theme'>{props.card.theme}</p>
        <p className='daily-card-description'>{props.card.description}</p>
        <ReflectionForm journalEntries={props.journalEntries} updateState={props.updateState} card={props.card} />
      </div>
    )
  }
}

DailyReading.propTypes = {
  card: PropTypes.object
}