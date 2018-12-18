import React, { Component } from 'react'
import{Row, Col,Container} from 'reactstrap'

export default class Personnes extends Component {
  render() {
    const person = this.props.person.map(d=> 
      <Container key={d.id}>
      <Row>
      <Col >{d.firstname}  </Col>
      <Col >{d.lastname}</Col>
      <Col >nombres de dépenses : {d.expenses.length}</Col>
      <Col > {d.expenses.reduce((accumulator, expense) => accumulator + parseFloat(expense.amount), 0)} €</Col>
      
    </Row>
    </Container>)
    return (
      <div>
        
        <h1>Personnes</h1>
        {person}
      </div>
    )
  }
}
