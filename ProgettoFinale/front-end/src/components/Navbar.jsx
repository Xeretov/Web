import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import './Navbar.css'

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">

      <Container className="d-none d-lg-flex d-md-flex justify-content-between align-items-center">
        <Nav className="d-flex">
          <Nav.Link as={Link} to="/" className="ms-3">Home</Nav.Link>
        </Nav>
        <Nav className="d-flex">
          <Nav.Link as={Link} to="/news" className="ms-3">News</Nav.Link>
        </Nav>
        <Nav className="d-flex"> 
          <Nav.Link as={Link} to="/employees" className="ms-3">Employees</Nav.Link>
        </Nav>
        <Navbar.Brand as={Link} to="/" className="mx-auto">
          <div className='logo-circle'>
            <img src={Logo} alt="BIG Business"/>
          </div>
        </Navbar.Brand>
        <Nav className="d-flex">
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Container>

      <Container className="d-lg-none d-md-none">
        <Navbar.Brand as={Link} to="/">
          <img src={Logo} alt="BIG Business" height="80"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-end w-100">
            <Navbar.Brand>BIG Business</Navbar.Brand>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/news">News</Nav.Link>
            <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
