import { React, Component } from 'react';
import './CardPage.scss';
import { PropTypes } from 'prop-types';
import { fetchCard } from '../fetch/fetch-requests';
import CardDatabase from '../CardDatabase/CardDatabase.js'
import { Link } from 'react-router-dom';

class CardPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCardId: this.props.thisCardId,
            card:'',
        }
    }

    componentDidMount() {
        fetchCard(this.state.currentCardId)
            .then(data => this.setState({ card: data }))
            .catch(err => alert(err))
    }

    render() {
        let tarot = this.state.card;
        return (
            
            <main>
                <section className='cardpage-info'>
                    <p>{tarot.title}</p>
                    <p>{tarot.numeral}</p>
                    <img src={tarot.image} alt={tarot.title}/>
                    <p>{tarot.theme}</p>
                    <p>{tarot.description}</p>
                    <Link to='/database'>Back</Link>
                </section>
            </main>
        )
    }
}

CardPage.propTypes = {
    thisCardId: PropTypes.number
  }

export default CardPage;