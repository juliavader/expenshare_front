import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import Group from './Group';
import CreateGroup from './CreateGroup';



export default class GroupForm extends Component {

  constructor(props) {
    super(props);
    this.state = { groupid: "" };
  }

  handleChange(e) {
    this.setState({ groupid: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/sharedgroup/check/' + this.state.groupid, {
      method: 'GET',
      headers: {'X-Requested-With' : 'XMLHttpRequest'}
      .then(response => response.json())
      .then(data => this.setState({ exps: data}))
    
    })
  }

  handleSubmit(event) {
    if (!event.target.checkValidity()) {
    
      return;
    }
   
  }

  render() {
    return (
      
        <Container>
    
        <Form onSubmit={e => this.handleLogin(e)}>
           <FormGroup>
           <Label>Saisissez l'identifiant du groupe</Label>
           <Input type="text" name="groupSlug" value={this.state.groupid} onChange={e => this.handleChange(e)} id="groupSlug" placeholder="Groupe ID" />
           <Button color="primary" type="submit"> <Link className="text-white" to="/createGroup" component={CreateGroup} >Create</Link></Button>
           <Button color="primary" type="submit"> <Link className="text-white" to="/Group" component={Group} >Find</Link></Button>
           <input type="submit"/>
           </FormGroup>
           
       </Form>
   
       </Container>
    )
  }
}
