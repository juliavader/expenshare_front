import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Menu from './Menu';
import Depenses from './Depenses';
import Personnes from './Personnes';
import './css/group.css'

export default class Group extends Component {

  constructor(props){
    super(props)
    this.state= { exps: [], person: [], sharedgroup: [] }
    
}


componentDidMount() {
    fetch('http://localhost:8888/expenshare_back/public/expense/group/'+this.props.match.params.slug,{
        method: 'GET', 
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
        .then(response => response.json())
    
        .then(data => this.setState({ exps: data}))

        fetch('http://localhost:8888/expenshare_back/public/person/group/'+this.props.match.params.slug,{
          method: 'GET', 
          headers : {'X-Requested-With' : 'XMLHttpRequest'}
      })
          .then(response => response.json())
          .then(data => this.setState({ person: data}))

          fetch('http://localhost:8888/expenshare_back/public/sharedgroup/'+this.props.match.params.slug,{
            method: 'GET', 
            headers : {'X-Requested-With' : 'XMLHttpRequest'}
        })
            .then(response => response.json())
            .then(data => this.setState({ sharedgroup: data}))
            
}

handleDeletePerson(id) {
  let persons = this.state.person;
  persons = persons.filter(person => person.id != id);
  this.setState({ person: persons });
}


handleDeleteExpense(id) {
  let expenses = this.state.exps;
  expenses = expenses.filter(exps => exps.id != id);
  this.setState({ exps: expenses });
}


  render() {

  
    return (
     <div >
       
       <Menu url ={this.props.match.url}/>
      
   
      <h1 className='titlegroup'>Welcome in team  {this.props.match.params.slug}</h1>
      
       <Route path ={`${this.props.match.url}/Depenses`}render={(props) => <Depenses {...this.state } deleteExpense={id => this.handleDeleteExpense(id)} url={this.props.match.url}/>}/>
       <Route path ={`${this.props.match.url}/Personnes`} render={(props) => <Personnes {...this.state} deletePerson={id => this.handleDeletePerson(id)} url={this.props.match.url}/>}/>
      
     </div>
    )
  }
}
