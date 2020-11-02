import './DailyReading.css';
import { Col, Row, Image } from 'react-bootstrap';
import React, { Component } from 'react';
import { fetchCards } from '../fetch/fetch-requests';

class DailyReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: [],
      currentCard: [],
    }
  }

  componentDidMount(){
    fetchCards()
       .then(data => this.setState({ deck: data }))
       .catch(err => alert(err));
    this.setState({ card: this.getRandomCard() })
  }

  getRandomCard() {
    let randomindex = Math.floor((Math.random() * this.state.deck.length));
    return this.state.deck[randomindex]
  }

  render() {
    return(
      <div>
        <p>RENDERING...DAILY READING</p>
      </div>
    ) 

    }
  

}

export default DailyReading;