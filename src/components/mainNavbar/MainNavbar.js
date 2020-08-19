import React from '../../../node_modules/react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavbar extends React.Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">TutorTools</Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown title="Learning" id="basic-nav-dropdown">
                <NavDropdown.Item href="practiceVowels">VowelPractice</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="#practice">Practice</Nav.Link>
           </Nav>
          </Navbar>
        </div>
      );
    }
  }

export default MainNavbar;