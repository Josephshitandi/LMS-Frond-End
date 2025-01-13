import React from "react";
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">ADVANCED LMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Services" id="navbar-dropdown">
              <NavDropdown.Item href="/courses/softwareEngineer">Software Engineering</NavDropdown.Item>
              <NavDropdown.Item href="/courses/dataScience">Data Science</NavDropdown.Item>
              <NavDropdown.Item href="/courses/cyberSecurity">Cyber Security</NavDropdown.Item>
              <NavDropdown.Item href="/courses/productDesign">Product Design</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/users/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
