import React, { Component } from "react";
import {
  Nav,
  NavbarToggler,
  Navbar,
  NavbarBrand,
  Collapse,
  NavItem,
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
        <Navbar sticky="top" expand="md" className="navbar" dark>
          <div className="container">
            {" "}
            <NavbarBrand className="mr-auto nav-header" href="/">
              <img
                src="/assets/img/logo.png"
                height="50"
                width="50"
                alt="studio logo"
                className="logo"
              />
              Movemento Studio
            </NavbarBrand>
            <NavbarToggler
              onClick={this.toggleNav}
              className="navbar-toggler"
            />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/classes">
                    Classes
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/plans">
                    Plans
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/team">
                    Our team
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/contactus">
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem className="nav-item">
                  <NavLink className="nav-link" to="/aboutus">
                    About Us
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
