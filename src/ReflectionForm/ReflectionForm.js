import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, Button, FormControl, Row, Col } from 'react-bootstrap'

export default class ReflectionForm extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      reflection: ''
     }
  }

  reflectionUpdate(event) {
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state.reflection)
  }


  render() {
    return (<div>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text>Put your own personal reflections here</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl value={this.state.reflection} as="textarea" name="reflection" onChange={(event) => this.reflectionUpdate(event)} aria-label="Put your own personal reflections here" />
      </InputGroup>
      <Row>
        <Col>
          <Button variant="outline-warning">Submit</Button>{' '}
        </Col>
      </Row>
    </div>)
  }
}