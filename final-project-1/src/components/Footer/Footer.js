import React from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import brand from '../../assets/icon-navbar.png'

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">

          <div className="col">
            <Navbar.Brand href="/">
              <img src={brand} alt="Home" className="brand-image" />
            </Navbar.Brand>
          </div>

          <div className="col">
            <h5>Categories</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/all">All</Nav.Link>
              <Nav.Link as={Link} to="/">Indonesia</Nav.Link>
              <Nav.Link as={Link} to="/covid19">COVID-19</Nav.Link>
              <Nav.Link as={Link} to="/programming">Programming</Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <Nav.Link 
                href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-1#getting-started"
              >
                Getting started
              </Nav.Link>
              <Nav.Link 
                href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-1#cara-penggunaan-aplikasi"
              >
                How to use
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <Nav.Link 
                as={Link} 
                to="/aboutus"
              >
                About Us
              </Nav.Link>
              <Nav.Link 
                type="link" 
                href="mailto:support@newsind.com"
              >
                support@newsind.com
              </Nav.Link>
              <Nav.Link
                type="link"
                href="tel:0234567890"
              >
                02345-567-890
              </Nav.Link>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col text-center copyrights">
            &copy;{new Date().getFullYear()} Copyright • All rights reserved • NewsApp
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;