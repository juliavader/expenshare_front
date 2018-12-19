import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button, Jumbotron} from 'reactstrap'
import Personnes from './Personnes';
import {Link, Redirect} from 'react-router-dom'

export default class FormPerson extends Component {
  constructor(props){
    super(props)
    this.state = {sharegroup: [], firstname: "",lastname: "", shared: "" }
  }

  componentDidMount() {
    fetch('http://localhost:8888/expenshare_back/public/sharedgroup/',{
        method: 'GET', 
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
        .then(response => response.json())
    
        .then(data => this.setState({ sharegroup: data}))
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
  handleChangeSg(e) {
    this.setState({ 
      shared: e.target.value,
    });
  }


  handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/person/', {
      method: 'POST',
      body: JSON.stringify({ 
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        sharedgroup: this.state.shared

      })
      
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Nouvelle personne  créé avec succès !');
        const { url } = this.props.match;
        this.props.history.push(url.substring(0, url.lastIndexOf('/')));
      })
      .catch(err => alert('Erreur lors de la création d\'une nouvelle personne'))
    ;
  }

  render() {
    
    const sharedgroup = this.state.sharegroup.map(p =>
        <option key={p.id} value={p.id}>{p.slug}</option>
    )

    return (
      <Jumbotron>

        {console.log(this.state)}
        <h2>Rajouter une dépense</h2>
        <Form onSubmit={e => this.handleLogin(e)}>

        <FormGroup>
          <Label for="firstname">Firstname</Label>
          <Input type="text" name="firstname" id="firstname" placeholder="Prénom"  value={this.state.title} onChange={e => this.handleChangeFn(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="Lastname">Lastname</Label>
          <Input type="text" name="Lastname" id="Lastname" placeholder="nom"  value={this.state.title} onChange={e => this.handleChangeLn(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">La Catégorie</Label>
          <Input type="select" name="select" id="sharedgroup" onChange={e => this. handleChangeSg(e)}>
            <option >Choisissez votre groupe</option>
            {sharedgroup}
          </Input>
        </FormGroup>
      
        <Button color="primary" onClick={e => this.handleCreate(e)} >Add</Button>

    </Form>
    </Jumbotron>)
  }
}
