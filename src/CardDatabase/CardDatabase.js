import React from 'react';
import './CardDatabase.scss';
// import { Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function CardDatabase(props) {
    return (
      <div className='cards'>
        {props.deck.map((card) => {
          const cardId = card.id;
          let reverseStatus;
          //console.log(card); CHECKING TO SEE IF CARD DATA IS BEING CALLED
          if (card.reversed) {
            reverseStatus = '(reverse)'
          } else {
            reverseStatus = ''
          }
          return (
            <p key={card.id}>
              <Link className='card-link' to={'/database/'+cardId}>{`${card.title} ${reverseStatus}`}</Link> 
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