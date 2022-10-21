import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../assets/icon-navbar.png'

function Navigation() {
  return (
    <div>
        <Navbar className="navigation border-bottom" fixed="top">
            <Container>
                <Navbar.Brand href="/" className="">
                    <img src={brand} alt="Home" className="brand-image" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                    </Nav>
                
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation;