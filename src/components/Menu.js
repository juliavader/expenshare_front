import React, { Component } from 'react'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Navbar color="secondary ">
                <NavbarBrand>
                <i className="fa fa-bookmark"></i>
                </NavbarBrand>
                <Nav >
                    <NavItem className="mr-3"><Button color="dark"><Link className="text-white" to={"/Group"}>Dashboard</Link></Button></NavItem>
                    <NavItem className="mr-3"><Button color="dark"><Link to={"/Group/Depenses"}className="text-white">Dépenses</Link></Button></NavItem>
                    <NavItem><Button color="dark"><Link to={"/Group/Personnes"}className="text-white">Personnes</Link></Button></NavItem>
                </Nav>
            </Navbar>
      </div>
    );
  }
}
