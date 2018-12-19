import React, { Component } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/menu.css' 
import {
    Navbar,
    NavbarBrand,
    Button,
    Nav,
    NavItem,
     } from 'reactstrap';

export default class Menu extends Component {


  render() {
    return (
        <div>
            <Navbar className="principal">
                <NavbarBrand>
               
                <p className='text-white'> <i className="fa fa-bookmark logo smalllogo" >$  </i>   Expendshare</p>
                </NavbarBrand>
                <Nav >
                    <NavItem className="mr-3"><Button color="light"><Link to={`${this.props.url}`}>Dashboard</Link></Button></NavItem>
                    <NavItem className="mr-3"><Button color="light"><Link to={`${this.props.url}/Depenses`}>Dépenses</Link></Button></NavItem>
                    <NavItem><Button color="light"><Link to={`${this.props.url}/Personnes`}>Personnes</Link></Button></NavItem>
                </Nav>
            </Navbar>
      </div>
    );
  }
}
