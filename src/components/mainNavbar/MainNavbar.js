import React from '../../../node_modules/react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavbar extends React.Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">TutorTools</Navbar.Brand>
            <Nav className="mr-auto">
              <NavDropdown title="Learning" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#practice">Practice</Nav.Link>
           </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </div>
      );
    }
  }

export default MainNavbar;