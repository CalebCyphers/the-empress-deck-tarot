import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Deck from '../Deck.js';
import Loader from '../Loader/Loader.js'
import DailyReading from '../DailyReading/DailyReading.js'

class App extends Component {
  state = { 

   }

  componentDidMount(){
    this.setState({ deck: new Deck() })
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
            <DailyReading card={this.state.deck.getRandomCard()} />
          </Container>
        </div> );
    }
  }
}

export default App;

