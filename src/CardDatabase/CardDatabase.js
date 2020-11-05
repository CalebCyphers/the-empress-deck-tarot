import React from 'react';
import './CardDatabase.scss';
import { Col, Row, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

export default function CardDatabase(props) {
    return (
      <div className='cards'>
        {props.deck.map((card) => {
          const cardId = card.id;
          let reverseStatus;
          if (card.reversed) {
            reverseStatus = <MaterialIcon key={cardId} color='white' icon='autorenew' />
          } else {
            reverseStatus = ''
          }
          return (
            <p>
              <Link className='card-link' key={cardId} to={'/database/'+cardId}>{`${card.numeral}. ${card.title}`} {reverseStatus}</Link> 
            </p>
          )
        })
        }
      </div>
    )
}

CardDatabase.propTypes = {
  card: PropTypes.object
}