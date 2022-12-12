import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineMovieFilter } from "react-icons/md";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <MdOutlineMovieFilter size={25} style={{ marginBottom: "4px" }} />{" "}
            MoviesInd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav>
            <Nav.Link as={Link} to="/">
              <HiHome style={{ marginBottom: "5px" }} /> Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
