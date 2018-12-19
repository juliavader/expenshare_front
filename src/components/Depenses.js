import React, { Component } from 'react'
import{Row, Col,Container, Table, Button, Navbar, NavbarBrand} from 'reactstrap'
import {NavLink, Route} from 'react-router-dom'
import FormDepense from './FormDepense';
import moment from 'moment'
import './css/depenses.css'


export default class Depenses extends Component {
    
  render() {
    const date = this.props.exps.map(d=> 
      
      <tbody key={d.id}>
      <tr>
        <td>{d.person.firstname} {d.person.lastname}</td>
        <td>{d.title}</td>
        <td>{d.amount} €</td>
        <td>{moment(d.createdAt).format("MMM Do YY")}</td>
      </tr>
      </tbody>
    
      )
    return (
        
      <Container className="mt-5">
      <Navbar>
       
      <NavbarBrand>
        <h3 className="secondtitle">Mes dépenses</h3>
        </NavbarBrand>
        <NavLink to = {this.props.url + '/Depenses/add'}><Button color="light mb-3" className="ajout mt-2 mb-2">Ajouter une dépense</Button></NavLink>
      </Navbar>
        <Route path= {this.props.url + '/Depenses/add'} component={FormDepense}/>
        <Table>
        <thead  >
          <tr>
            <th>Personne</th>
            <th>Achat</th>
            <th>Montant</th>
            <th>Jour</th>
          </tr>
        </thead>
       {date}
       </Table>
      </Container>
    )
  }
}
