import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/" className="">
                    <img src="" alt="" className="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link as={Link} to="/">Indonesia</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/covid-19">COVID-19</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link as={Link} to="/saved">Saved</Nav.Link>
                        </Nav.Item>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navigation;