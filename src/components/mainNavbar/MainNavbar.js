import React from '../../../node_modules/react';
import {Navbar, Nav, Form, FormControl, Button} from '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class MainNavbar extends React.Component {
    render() {
      return (
        <div>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">TutorTools</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#learning">Learning</Nav.Link>
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