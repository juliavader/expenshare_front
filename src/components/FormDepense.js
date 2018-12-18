import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button} from 'reactstrap'

export default class FormDepense extends Component {

  render() {
    return (
        <Form onSubmit={e => this.handleLogin(e)}>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>

        <FormGroup>
        <Input type="text" name="groupSlug" id="groupSlug" placeholder="votre dépense" />
        <Button color="primary" >Add</Button>
        </FormGroup>
        
    </Form>)
  }
}
