import React, { Component } from 'react'
import{Container, Table, Button, Navbar, NavbarBrand} from 'reactstrap'
import {NavLink, Route} from 'react-router-dom'
import FormDepense from './FormDepense';
import moment from 'moment'
import './css/depenses.css'


export default class Depenses extends Component { 
  constructor(props){
    super(props)
  }


  handleDelete(e, id) {

    e.preventDefault(e);

    console.log(this.state)


    fetch('http://localhost:8888/expenshare_back/public/expense/', {
      method: 'DELETE',
      body: JSON.stringify({ 
        expense: id
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.props.deleteExpense(id);
        alert(' Dépense supprimée avec succès !');
       
      })
      .catch(err => alert('Erreur lors de la création d\'une dépense'))
    ;
 
  }




  render() {
    const date = this.props.exps.map(d=> 
      
      <tbody key={d.id}>
      <tr>
        <td>{d.person.firstname} {d.person.lastname}</td>
        <td>{d.title}</td>
        <td>{d.amount} €</td>
        <td>{moment(d.createdAt).format("MMM Do YY")}</td>
        <td><Button onClick={e => this.handleDelete(e, d.id)}>Supprimer</Button></td>
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
    <Route path= {this.props.url + '/Depenses/add'} render={(props) => <FormDepense {...this.state } url={this.props.url}/>} />
        <Table>
        <thead  >
          <tr>
            <th>Personne</th>
            <th>Achat</th>
            <th>Montant</th>
            <th>Jour</th>
            <th>Action</th>
          </tr>
        </thead>
       {date}
       </Table>
      </Container>
    )
  }
}
