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
          //console.log(card); CHECKING TO SEE IF CARD DATA IS BEING CALLED
          if (card.reversed) {
            reverseStatus = 'reversed'
            reverseStatus = <MaterialIcon color='white' icon='autorenew' />
          } else {
            reverseStatus = ''
          }
          return (
            <p>
              <Link className='card-link' key={card.id} to={'/database/'+cardId}>{`${card.numeral}. ${card.title}`} <a>{reverseStatus}</a></Link> 
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