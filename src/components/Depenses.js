import React, { Component } from 'react'
import{Row, Col,Container} from 'reactstrap'
import {NavLink, Route} from 'react-router-dom'
import FormDepense from './FormDepense';
import moment from 'moment'

export default class Depenses extends Component {
    
  render() {
    const date = this.props.exps.map(d=> 
        <Container key={d.id}>
        <Row>
        <Col >{d.person.firstname} {d.person.lastname} </Col>
        <Col >{d.title}</Col>
        <Col  >{d.amount} €</Col>
        <Col >{moment(d.createdAt).format("MMM Do YY")}</Col>
      </Row>
      </Container>)
    return (
        
      <div>
        
        <h1>Mes dépenses</h1>
        <NavLink to = {this.props.url + '/Depenses/add'}>Ajouter une dépense</NavLink>
        <Route path= {this.props.url + '/Depenses/add'} component={FormDepense}/>
       {date}
       
      </div>
    )
  }
}
