import React, { Component } from 'react'
import{Row, Col,Container, Table, Navbar, NavbarBrand, Button} from 'reactstrap'
import {NavLink, Route} from 'react-router-dom'
import FormPerson from './FormPerson';
import './css/depenses.css'

export default class Personnes extends Component {
  render() {
    const person = this.props.person.map(d=> 
    
    <tbody key={d.id}>
      <tr>
        <td>{d.firstname} </td>
        <td>{d.lastname}</td>
        <td>{d.expenses.length}</td>
        <td>{d.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)} €</td>
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
        <Route path= {this.props.url + '/Personnes/add'} component={FormPerson}/>
        <Table>
        <thead  >
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Nombre de dépenses</th>
            <th>Montant Total</th>
          </tr>
        </thead>
      
        {person}
        </Table>
      </Container>
    )
  }
}
