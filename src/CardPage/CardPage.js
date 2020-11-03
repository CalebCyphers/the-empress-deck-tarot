import { React, Component } from 'react';
import './CardPage.scss';
import { Col, Row, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { fetchCard } from '../fetch/fetch-requests';

class CardPage extends Component {
    constructor(props) {
        this.state = {
            card: undefined,
            id: this.card.id
        }
    }
    componentDidMount() {
        const cardId = props.cardId
        fetchCard()
            .then(data => this.setState({ card: data}))
            .catch(err => alert(err))
    }
    return (

    )
}

export default CardPage;