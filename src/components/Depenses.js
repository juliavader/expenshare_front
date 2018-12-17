import React, { Component } from 'react'
import{Row, Col,Container} from 'reactstrap'
import moment from 'moment'
export default class Depenses extends Component {
    
  render() {
    const date = this.props.exps.map(d=> 
        <Container key={d.id}>
        <Row>
        <Col >{d.person.firstname} {d.person.lastname} </Col>
        <Col >{d.title}</Col>
        <Col  >{d.amount} €</Col>
        <Col >{d.createdAt}</Col>
      </Row>
      </Container>)
    return (
        
      <div>
        {console.log(this.props)}
       <h1>Mes dépenses</h1>
       {date}
      </div>
    )
  }
}
