import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Menu from './Menu';
import Depenses from './Depenses';
import Personnes from './Personnes';

export default class Group extends Component {

  constructor(props){
    super(props)
    this.state= { exps: [], person: []}
}
componentDidMount() {
    fetch('http://localhost:8888/expenshare_back/public/expense/',{
        method: 'GET', 
        headers : {'X-Requested-With' : 'XMLHttpRequest'}
    })
        .then(response => response.json())
    
        .then(data => this.setState({ exps: data}))

        fetch('http://localhost:8888/expenshare_back/public/person/',{
          method: 'GET', 
          headers : {'X-Requested-With' : 'XMLHttpRequest'}
      })
          .then(response => response.json())
          .then(data => this.setState({ person: data}))
}



  render() {
    
    return (
     <div>
      
       
       <Menu/>
       {console.log(this.state)}
       <Route path ="/Group/Depenses" render={(props) => <Depenses {...this.state} />}/>
       <Route path ="/Group/Personnes" component={Personnes}/>
     </div>
    )
  }
}
