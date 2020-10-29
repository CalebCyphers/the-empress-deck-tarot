import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Deck from '../Deck.js';
import Loader from '../Loader/Loader.js'
import DailyReading from '../DailyReading/DailyReading.js'
import { fetchCards } from '../fetch/fetch-requests';

class App extends Component {
  state = { 

   }

  componentDidMount(){
    fetchCards()
      .then(data => this.setState({ deck: data }))
      .catch(err => alert(err))
  }

  render() { 
    if (!this.state.deck) {
      return ( 
      <div className="App">
        <Container>
          <Loader />
        </Container>
      </div> );
    } else {
      return (
        <div className="App">
          <Container>
            <DailyReading card={this.getRandomCard()} />
          </Container>
        </div> );
    }
  }

  getRandomCard() {
    let randomindex = Math.floor((Math.random() * this.state.deck.length));
    return this.state.deck[randomindex]
  }
}

export default App;

