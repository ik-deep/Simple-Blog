import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Simple-Blog</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Contact me" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1"><a href="https://www.linkedin.com/in/irfan-khan173/ " >Linkdin</a></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2"><a href="https://www.linkedin.com/in/irfan-khan173/">Facebook</a></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><a style= {{textdecoration: "none"}} href="https://www.linkedin.com/in/irfan-khan173/">GitHub</a></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4"><a href=" ">Email</a></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default Header
