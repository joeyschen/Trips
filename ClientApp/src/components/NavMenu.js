import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from 'reactstrap';
import { Link } from 'react-router-dom';
import {useAuth0} from "@auth0/auth0-react"

import './NavMenu.css';

const NavMenu = () => {
  const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0();

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">Home</NavbarBrand>

          {isAuthenticated ? (
          /* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */
          /* <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar> */
              <ul className="navbar-nav flex-grow">
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="text-dark" to="/Trips">Trips</NavLink>
                </NavItem>
                <NavItem>
                  <button className="btn btn-danger" onClick={() => logout()}>Log Out</button>
                </NavItem>
                <NavItem>
                  <a class="nav-link p-1" href="#">
                    <img src={user.picture} alt={user.name} className="rounded-circle z-depth-0"
                      alt="avatar image" height="35" />
                  </a>
                </NavItem>
              </ul>
            ) : ( 
              <ul className="navbar-nav flex-grow">
                <button className="btn btn-success" onClick={() => loginWithRedirect()}>Log In</button>
              </ul>
            )}
          {/* </Collapse> */}
        </Container>
      </Navbar>
    </header>
  );
}

// export class NavMenu extends Component {
//   static displayName = NavMenu.name;

//   constructor (props) {
//     super(props);

//     this.toggleNavbar = this.toggleNavbar.bind(this);
//     this.state = {
//       collapsed: true
//     };
//   }

//   toggleNavbar () {
//     this.setState({
//       collapsed: !this.state.collapsed
//     });
//   }

//   render () {
    
//   }
// }

export default NavMenu;
