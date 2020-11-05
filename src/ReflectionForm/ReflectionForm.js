import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Button, FormControl, Row, Col } from 'react-bootstrap';
import './ReflectionForm.scss'

export default class ReflectionForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      reflection: '',
      newEntry: {}
     }
  }

  buildJournalEntry = async (text, card) => {
    await this.setState({ newEntry: {
      id: Date.now(),
      text: text,
      card: card
    }})
    let newArray = this.props.journalEntries.concat(this.state.newEntry)
    this.props.updateState(newArray)
    this.setState({ reflection: '' })
  }

  reflectionUpdate = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }


  render() {
    return (<div>
      <Row>
        <Col>
          <InputGroup>
            <InputGroup.Prepend>
            </InputGroup.Prepend>
            <FormControl className='input-box' placeholder='Put your own personal reflections here.' value={this.state.reflection} as="textarea" name="reflection" onChange={(event) => this.reflectionUpdate(event)} aria-label="Put your own personal reflections here" />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className='journal-button' onClick={(event) => {
            this.buildJournalEntry(this.state.reflection, this.props.card)
            }}variant="outline-warning">Submit</Button>{' '}
        </Col>
      </Row>
    </div>)
  }
}