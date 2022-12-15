import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { MdOutlineMovieFilter } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";

const Navigation = ({ setSearch }) => {
  const input = {
    backgroundColor: "#2E3236",
    color: "#c0c0c0",
    outline: "none",
    fontSize: "12pt",
    width: "350px",
    padding: "3px 12px 3px 12px",
    border: "1.5px solid #5e5e5e",
    borderRadius: "50px",
    fontFamily: "Arial, FontAwesome",
  };
  const nav = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSearch(e.target.value);
      nav(`./search`);
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <MdOutlineMovieFilter size={25} style={{ marginBottom: "4px" }} />{" "}
            MoviesInd
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <input
            type="text"
            placeholder="&#xF002; &nbsp;Search your movies here..."
            onKeyDown={handleSearch}
            style={input}
          />

          <Nav>
            <Nav.Link as={Link} to="/">
              <HiHome style={{ marginBottom: "5px" }} /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <RiTeamFill style={{ marginBottom: "5px" }} /> About Us
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
