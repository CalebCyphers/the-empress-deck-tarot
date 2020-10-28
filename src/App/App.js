import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deck from '../Deck.js';
import DailyReading from '../DailyReading/DailyReading.js'

const deck = new Deck()
let randomCard = deck.getRandomCard();

class App extends Component {
  state = { 

   }
  render() { 
    return ( 
    <div className="App">
      <img src={randomCard.image} alt={randomCard.title}></img>
      <DailyReading />
    </div> );
  }
}
 
export default App;

