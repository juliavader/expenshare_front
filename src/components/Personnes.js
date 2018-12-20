import React, { Component } from 'react'
import{Row, Col,Container, Table, Navbar, NavbarBrand, Button} from 'reactstrap'
import {NavLink, Route} from 'react-router-dom'
import FormPerson from './FormPerson';
import './css/depenses.css'

export default class Personnes extends Component {
  constructor(props){
    super(props)
  }


  handleDelete(e, id) {

    e.preventDefault(e);
    
    fetch('http://localhost:8888/expenshare_back/public/person/', {
      method: 'DELETE',
      body: JSON.stringify({ 
        person: id
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.deletePerson(id);
        alert(' personne supprimée avec succès !');
       
      })
      .catch(err => alert('Erreur lors de la création d\'une nouvelle personne'))
    ;
 
  }
  




  render() {
    const person = this.props.person.map(d=> 
 
    <tbody key={d.id}>
      <tr>
        <td>{d.firstname} </td>
        <td>{d.lastname}</td>
        <td>{d.expenses.length}</td>
        <td>{d.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)} €</td>
        <td><Button onClick={e => this.handleDelete(e, d.id)}>Supprimer</Button></td>
      </tr>
      </tbody>)

    return (
     <Container className="mt-5">
          
        <Navbar>
      
        <NavbarBrand>
          <h3 className="secondtitle">Personnes</h3>
        </NavbarBrand>
        <NavLink to = {this.props.url + '/Personnes/add'} ><Button color="light mb-3" className="ajout mt-2 mb-2">Ajouter une personne</Button></NavLink>
   
        </Navbar>
        <Route path= {this.props.url + '/Personnes/add'} render={(props) => <FormPerson {...this.state } url={this.props.url}/>}/>
        <Table>
        <thead  >
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Nombre de dépenses</th>
            <th>Montant Total</th>
            <th>Action</th>
          </tr>
        </thead>
      
        {person}
        </Table>
      </Container>
    )
  }
}
