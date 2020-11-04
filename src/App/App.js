import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import Loader from '../Loader/Loader.js'
import DailyReading from '../DailyReading/DailyReading.js'
import NavBar from '../NavBar/NavBar.js'
import { fetchCards } from '../fetch/fetch-requests';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CardDatabase from '../CardDatabase/CardDatabase.js'
import CardPage from '../CardPage/CardPage.js';
import Journal from '../Journal/Journal.js';

class App extends Component {
  constructor() {
    super()
    this.state = { 
      deck: undefined,
      journalEntries: []
     }
  }

  getRandomCard = () => {
    let randomindex = Math.floor((Math.random() * this.state.deck.length));
    return this.state.deck[randomindex]
  }

  getJournal = () => {
    if (JSON.parse(localStorage.getItem('journal'))) {
      this.setState({ journalEntries: JSON.parse(localStorage.getItem('journal')) })
    }
  }

  saveJournal = () => {
    localStorage.setItem('journal', JSON.stringify(this.state.journalEntries));
  }

  updateState = (value) => {
    this.setState({ journalEntries: value })
    this.saveJournal()
  }

  componentDidMount(){
    this.getJournal()
    fetchCards()
      .then(data => this.setState({ deck: data }))
      .catch(err => alert(err))
  }

  render() { 
    if (!this.state.deck) {
      return ( 
      <div className="App">
          <Loader />
      </div> );
    } else {
      return (
        <Router>
          <div className="App">
            <Route exact path="/" render={props => (
              <section>
                <NavBar></NavBar>
                <DailyReading journalEntries={this.state.journalEntries} updateState={this.updateState} card={this.getRandomCard()} />
              </section>
            )} />
            <Route exact path="/database" render={props => (
              <section>
                <NavBar />
                <CardDatabase deck={this.state.deck} />
              </section>
            )} />
          <Route exact path="/database/:cardId" 
            render={({ match }) => {
              const { cardId } = match.params;
              return <CardPage thisCardId={cardId}/>
            }} />
            <Route exact path="/journal" render={() => (
              <Container>
                <NavBar />
                <Journal journalEntries={this.state.journalEntries} />
              </Container>
            )}/>
          </div>
        </Router>
     );
    }
  }
}

export default App;

