import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route} from 'react-router-dom'

import GroupForm from './components/GroupForm';
import Group from './components/Group';
import CreateGroup from './components/CreateGroup';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/" component={GroupForm}/>
      <Route path ="/Group" component={Group}/>
      <Route path ="/createGroup" component={CreateGroup}/>
      </div>
    );
  }
}

export default App;
