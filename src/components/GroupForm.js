import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button} from 'reactstrap'
import {Redirect} from 'react-router-dom'
import Group from './Group';
import CreateGroup from './CreateGroup';
import './css/groupform.css'


export default class GroupForm extends Component {

  constructor(props) {
    super(props);
    this.state = { slug: "", sharegroup: null };
  }

  handleChange(e) {
    this.setState({ slug: e.target.value });
  }

  handleCreate(event) {
    event.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/sharedgroup/', {
      method: 'POST',
      body: JSON.stringify({ slug: this.state.slug })
      
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        alert('Nouveau groupe créé avec succès !');
      })
      .catch(err => alert('Erreur lors de la création du groupe'))
    ;
  }
 

  handleOpen(event) {
    event.preventDefault();
    fetch('http://localhost:8888/expenshare_back/public/sharedgroup/' + this.state.slug)
   
    
      .then(response => response.json())
      .then(data => {
       
        this.setState({ sharegroup: JSON.parse(data) });
        
      })
      
      .catch(err => alert('Ce groupe n\'existe pas !'))
    ;
      
   
  }

  render() {

   

    if (this.state.sharegroup) {
      return <Redirect to={'/Group/' + this.state.sharegroup.slug}/>
    }
    return (

      
        <Container className="groupform text-center">
        {console.log(this.props.match.params.slug)}
        <span className="logo ">$ </span>
        <Form onSubmit={e => this.handleLogin(e)}>
           <FormGroup>
           <Label className="mb-3 mt-5 titlegroup text-white">Saisissez l'identifiant du groupe</Label>
           <Input type="text" name="groupSlug" value={this.state.slug} onChange={e => this.handleChange(e)} id="groupSlug" placeholder="Rejoins ton groupe" />
           <div className=" mt-3">
           <Button color="primary" onClick={e => this.handleCreate(e)} className="mr-4 buttongroup">Create</Button>
           <Button color="primary" id='find' onClick={e => this.handleOpen(e)} className="buttongroup"> Find</Button>
           </div>
           
           
           </FormGroup>
           
       </Form>
   
       </Container>
    )
  }
}
