import React from '../../../node_modules/react';
import {Navbar, Nav, NavDropdown} from '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css'

class MainNavbar extends React.Component {
    render() {
      return (
        <div className="navContainer">
          <Navbar bg="light" variant="light">
            <Navbar.Brand  href="/">
              <div className="navTitle">Tutor Tools</div></Navbar.Brand>
            <Nav className="mr-auto" className="navItem">
              <NavDropdown title="Learning" id="basic-nav-dropdown">
                <NavDropdown.Item href="practiceVowels">VowelPractice</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="practice">Practice</Nav.Link>
           </Nav>
          </Navbar>
        </div>
      );
    }
  }

export default MainNavbar;