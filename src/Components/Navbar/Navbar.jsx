import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'
import {FaStudiovinari} from "react-icons/fa"
const Header = () => {
  return (
    <Navbar expand="lg" className="Head">
    <Container>
    <Navbar.Brand href="#home" className='fs-2 text-white'>
      <FaStudiovinari/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className=" ms-auto">
        <Nav.Link href="#" className='fw-bold text-white'>Home</Nav.Link>
        <Nav.Link href="Jobs" className='fw-bold text-white'>Job</Nav.Link>
        <Nav.Link href="Login" className='fw-bold text-white'>Login</Nav.Link>
        <Nav.Link href="#" className='fw-bold text-white'>LogOut</Nav.Link>
     </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>
  );
}

export default Header