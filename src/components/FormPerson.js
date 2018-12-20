import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Button, Jumbotron} from 'reactstrap'


export default class FormPerson extends Component {
  constructor(props){
    super(props)
    this.state = {firstname: "",lastname: "", share: this.props.url.substring(7) }
  }

  


  handleChangeFn(e) {
    this.setState({ 
      firstname: e.target.value,
    });
  }
  handleChangeLn(e) {
    this.setState({ 
      lastname: e.target.value,
    });
  }
  


  handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/person/', {
      method: 'POST',
      body: JSON.stringify({ 
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        sharedgroup: this.state.share

      })
      
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Nouvelle personne  créé avec succès !');
        window.location.href = window.location.href.substr(0, window.location.href.length-3);
      })
      .catch(err => alert('Erreur lors de la création d\'une nouvelle personne'))
    ;
 
  }

  render() {
    
    return (
      <Jumbotron>
 
        <h2>Rajouter une personne</h2>
        <Form onSubmit={e => this.handleLogin(e)}>
      {console.log(this.state)}
        <FormGroup>
          <Label for="firstname">Firstname</Label>
          <Input type="text" name="firstname" id="firstname" placeholder="Prénom"  value={this.state.title} onChange={e => this.handleChangeFn(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Lastname">Lastname</Label>
          <Input type="text" name="Lastname" id="Lastname" placeholder="nom"  value={this.state.title} onChange={e => this.handleChangeLn(e)}/>
        </FormGroup>
      
      {console.log(this.state)}
        <Button color="primary" onClick={e => this.handleCreate(e)} >Add</Button>

    </Form>
    </Jumbotron>)
  }
}
