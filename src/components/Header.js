import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import SignIn from './Signin';
import SignUp from './Signup';

function Header() {
  return (
    <header>
      <Navbar bg = 'light' expand="xl" className="bg-body-tertiary" collapseOnSelect>
        <Container fluid='md'>
          <Navbar.Brand href="/home" className='fs-1'>
            <p className='font-weight-bold'>
            Mirror
            </p>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/discussion" className='fs-6'>Discussion Forum</Nav.Link>
              <NavDropdown title="Menu" id="basic-nav-dropdown" className='fs-6'>
                <NavDropdown.Item href="/test" className='fs-6'>Test Now</NavDropdown.Item>
                <NavDropdown.Item href="/avatar" className='fs-6'>Avatar</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/materials">
                  Learn More
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav className='ms-auto'>
              <Nav.Link href="/login" className='fs-6'><i className='fas fa-user-circle fa-sm'></i>Login</Nav.Link>
              <Nav.Link href="/profile" className='fs-6'><i className='fas fa-address-card fa-sm'></i>Profile</Nav.Link>
              <Nav.Link href="/about" className='fs-6'><i className='fas fa-info-circle fa-sm'></i>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>

  )
}

export default Header