import React, { Component } from 'react'
import {Form, FormGroup, Input, Label, Container, Button} from 'reactstrap'


export default class GroupList extends Component {
    constructor(props){
        super(props)
        this.state= { exps: []}
    }
    componentDidMount() {
        fetch('http://localhost:8888/expenshare_back/public/expense/',{
            method: 'GET', 
            headers : {'X-Requested-With' : 'XMLHttpRequest'}
        })

            .then(response => response.json())
        
            .then(data => this.setState({ exps: data}))
     
    }
    
  render() {
    return (
      <Container>
      <Form>
         <FormGroup>
         <Label>Saisissez l'identifiant du groupe</Label>
         <Input type="text" name="select" id="exampleSelect" placeholder="Groupe ID"/>
         </FormGroup>
         <Button>Submit</Button>
     </Form>
     </Container>
    )
  }
}
