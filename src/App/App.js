import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap'
import Loader from '../Loader/Loader.js'
import DailyReading from '../DailyReading/DailyReading.js'
import NavBar from '../NavBar/NavBar.js'
import { fetchCards } from '../fetch/fetch-requests';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import CardDatabase from '../CardDatabase/CardDatabase.js'
import CardPage from '../CardPage/CardPage.js';

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
          <Loader />
      </div> );
    } else {
      return (
        <Router>
          <div className="App">
            <Route exact path="/" render={props => (
              <Container>
                <Row>
                  <Col>
                    <NavBar></NavBar>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <DailyReading card={this.getRandomCard()} />
                  </Col>
                </Row>
              </Container>
            )} />
            <Route exact path="/database" render={props => (
            <Container>
            <Row>
              <Col>
                <NavBar />
              </Col>
            </Row>
            <Row>
              <Col>
                <CardDatabase deck={this.state.deck} />
              </Col>
            </Row>
          </Container>
          )} />
          <Route exact path="/database/:cardId" 
            render={({ match }) => {
              const { cardId } = match.params;
              return <CardPage thisCardId={cardId}/>
            }} 
          />
          </div>
        </Router>
     );
    }
  }

  getRandomCard() {
    let randomindex = Math.floor((Math.random() * this.state.deck.length));
    return this.state.deck[randomindex]
  }
}

export default App;

