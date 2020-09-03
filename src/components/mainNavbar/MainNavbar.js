import React from '../../../node_modules/react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './MainNavbar.css'

class MainNavbar extends React.Component {
    render() {
      return (
        <div className="navContainer">
          <Navbar bg="light" variant="light" className="main-navbar">
            <Nav className="mr-auto" className="leftNavBarItems" className="order-1" className="w-100">
              <NavDropdown className="navItem" title="Learning" id="basic-nav-dropdown">
                <NavDropdown.Item href="practiceVowels" className="navItem">Vowel Practice</NavDropdown.Item>
                <NavDropdown.Item href="practiceGcf" className="navItem">Greatest Common Factor Practice</NavDropdown.Item>
                <NavDropdown.Item href="practiceLcm" className="navItem">Least Common Multiple Practice</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
              <Nav.Link href="practice" className="navItem">Practice</Nav.Link>
            </Nav>
            <Nav className="mx-auto" className="order-0">
              <Navbar.Brand  href="/" className="brandItem">
                <div className="navTitle">Tutor Tools</div>
              </Navbar.Brand>
            </Nav>    
            <Nav className="rightNavBarItems" className="order-2" className="w-100">
              <Form inline className="ml-auto">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-primary">Search</Button>
              </Form>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }

export default MainNavbar;