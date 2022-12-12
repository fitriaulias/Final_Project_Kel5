import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Styles.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <Navbar.Brand href="/">
              {/* <img src={brand} alt="Home" className="brand-image" /> */}
            </Navbar.Brand>
          </div>

          <div className="col">
            <h5>Section</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/">
                Popular Movie
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Top Rated Movies
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5>Resources</h5>
            <ul className="list-unstyled">
              <Nav.Link href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-4">
                Getting started
              </Nav.Link>
              <Nav.Link href="https://github.com/fitriaulias/Final_Project_Kel5/tree/main/final-project-4">
                How to use
              </Nav.Link>
            </ul>
          </div>

          <div className="col">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <Nav.Link as={Link} to="/aboutus">
                About Us
              </Nav.Link>
              <Nav.Link type="link" href="mailto:support@movieind.com">
                support@movieind.com
              </Nav.Link>
              <Nav.Link type="link" href="tel:0234567890">
                02345-567-890
              </Nav.Link>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col text-center copyrights">
            &copy;{new Date().getFullYear()} Copyright • All rights reserved •
            MoviesInd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
