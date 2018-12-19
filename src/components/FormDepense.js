import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button, Jumbotron} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import Depenses from './Depenses';

export default class FormDepense extends Component {
  constructor(props){
    super(props)
    this.state = {category: [], person: [], title: "", amount:"", selectedCatIndex:"", selectedPersIndex:""
  }}

  componentDidMount() {
    fetch('http://localhost:8888/expenshare_back/public/category/',{
        method: 'GET', 
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
        .then(response => response.json())
    
        .then(data => this.setState({ category: data}))
  

  fetch('http://localhost:8888/expenshare_back/public/person/',{
        method: 'GET', 
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
        .then(response => response.json())
    
        .then(data => this.setState({ person: data}))
  }

  handleChangeTitle(e) {
    this.setState({ 
      title: e.target.value,
    });
  }

  handleChangeAmount(e) {
    this.setState({ 
      amount: e.target.value,
    });
  }

  handleChangeCat(event) {
    this.setState({ 
      selectedCatIndex: event.target.value,
    });
  }

  handleChangePers(event) {
    this.setState({ 
      selectedPersIndex: event.target.value,
    });
  }


  handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/expense/', {
      method: 'POST',
      body: JSON.stringify({ 
        title: this.state.title,
        amount: this.state.amount,
        category: this.state.selectedCatIndex,
        person: this.state.selectedPersIndex
      })
      
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Nouvelle dépense rajoutée !');
        return <Redirect to={Depenses}/>
      })
      .catch(err => alert('Erreur lors de la création d\'une nouvelle dépense'))
    ;


  }

  render() {

    const category = this.state.category.map(c =>
      <option key={c.id} value={c.id} >{c.label}</option>
      )
    const person = this.state.person.map(p =>
      <option key={p.id} value={p.id}>{p.firstname} {p.lastname}</option>
      )

    return (
      <Jumbotron>

        
        <h2>Rajouter une dépense</h2>
        <Form onSubmit={e => this.handleLogin(e)}>

        <FormGroup>
          <Label for="title_expense">Titre de la dépense</Label>
          <Input type="text" name="title_expense" id="title_expense" placeholder="Nom de la dépense"  value={this.state.title} onChange={e => this.handleChangeTitle(e)}/>
        </FormGroup>
        <FormGroup>
          <Label for="amount">montant</Label>
          <Input type="number" name="amount" id="amount" placeholder="montant de votre dépense" value={this.state.amount} onChange={e => this.handleChangeAmount(e)}/>
        </FormGroup>  
        <FormGroup>
          <Label for="exampleSelect">La Catégorie</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={e => this. handleChangeCat(e)}>
            <option >Choisissez votre categorie</option>
            {category}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Qui a payé ?</Label>
          <Input type="select" name="select" id="exampleSelect" onChange={e => this. handleChangePers(e)}>
            <option >Qui a payé ?</option>
            {person}
          </Input>
        </FormGroup>

      
        <Button color="primary" onClick={e => this.handleCreate(e)} >Add</Button>

    </Form>
    </Jumbotron>)
  }
}
