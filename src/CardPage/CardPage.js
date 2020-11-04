import { React, Component } from 'react';
import './CardPage.scss';
import { PropTypes } from 'prop-types';
import { fetchCard } from '../fetch/fetch-requests';
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
        if(!tarot.reversed) {
        return (
            <main className='individual-card'>
                <section className='cardpage-info'>
                    <p className='tarot-title'>{tarot.title}</p>
                    <p className='tarot-numeral'>{tarot.numeral}</p>
                    <img className='tarot-image' src={tarot.image} />
                    <p className='tarot-theme'>{tarot.theme}</p>
                    <p className='tarot-description'>{tarot.description}</p>
                    <Link className='tarot-back' to='/database'>Back</Link>
                </section>
            </main>
         )
        } else {
            return (
                <main className='individual-card'>
                    <section className='cardpage-info'>
                        <p className='tarot-title'>{tarot.title}</p>
                        <p className='tarot-numeral'>{tarot.numeral}</p>
                        <img className='tarot-image-reversed' src={tarot.image} />
                        <p className='tarot-theme'>{tarot.theme}</p>
                        <p className='tarot-description'>{tarot.description}</p>
                        <Link className='tarot-back' to='/database'>Back</Link>
                    </section>
                </main>
             )
        }
    }

 }


export default CardPage;