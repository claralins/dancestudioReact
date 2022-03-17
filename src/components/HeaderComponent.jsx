import React, { Component } from "react";
import {
  Nav,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }
  render() {
    return (
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Movemento studio</h1>
              </div>
            </div>
          </div>
        </Jumbotron>{" "}
        <Navbar sticky="top" expand="md" className="navbar">
          <div className="container">
            {" "}
            <NavbarBrand className="mr-auto">
              <img
                src="/assets/img/logo.png"
                height="30"
                width="30"
                alt="studio logo"
              />
              Movemento Studio
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="nav">
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg">Home</i>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/classes">
                    <i className="fa fa-home fa-lg">Classes</i>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/plans">
                    <i className="fa fa-home fa-lg">Plans</i>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-home fa-lg">Contact</i>
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-home fa-lg">About Us</i>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;
