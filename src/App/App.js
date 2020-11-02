import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Loader from '../Loader/Loader.js'
import DailyReading from '../DailyReading/DailyReading.js'
import NavBar from '../NavBar/NavBar.js'
import { fetchCards } from '../fetch/fetch-requests';

class App extends Component {
  state = { 
    deck: undefined
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
            <NavBar></NavBar>
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

