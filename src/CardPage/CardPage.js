import { React, Component } from 'react';
import './CardPage.scss';
import { Col, Row, Image } from 'react-bootstrap';
import { PropTypes } from 'prop-types';
import { fetchCard } from '../fetch/fetch-requests';
import CardDatabase from '../CardDatabase/CardDatabase.js'

class CardPage extends Component {
    constructor() {
        super();
        this.state = {
            card: undefined,
            id: this.card.id,
        }
    }

    componentDidMount(id) {
        const cardId = this.state.id;
        fetchCard(id)
            .then(data => this.setState({ card: data}))
            .then(console.log(this.state))
            .catch(err => alert(err));
    }

    render() {
        return (
            <main>

            </main>
            )
    }

 }


export default CardPage;