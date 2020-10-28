import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deck from '../Deck.js';
import DailyReading from '../DailyReading/DailyReading.js'

const deck = new Deck()
console.log(deck.getRandomCard());

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <div className="App">
      <DailyReading />
    </div> );
  }
}
 
export default App;

