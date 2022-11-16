import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { calculateQuantity } from "../redux/features/cartSlice";
import Dropdown from 'react-bootstrap/Dropdown';
import { Navbar, Nav, Container } from 'react-bootstrap';
import brand from '../assets/icon-navbar.png'

const Navigation = ({token, setToken}) => {
  const nav = useNavigate()
  // console.log(token)

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("userToken");
    nav("./Login")
  };

  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateQuantity());
  }, [dispatch]);

  return (
    <div>
      <Navbar className="navigation border-bottom" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={brand} alt="Home" className="brand-image" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="product">Products</Nav.Link>
              <Nav.Link as={Link} to="/">About Us</Nav.Link>
              <Nav.Link as={Link} to="/cart">Cart <span className="count-on-me">{cartTotalQuantity}</span></Nav.Link>
              {token == null ? <button className="btn-primary" onClick={() => nav("./Login")}>LOGIN</button> :
              <Dropdown className="d-inline mx-2" autoClose="inside">
                <Dropdown.Toggle id="dropdown-autoclose-inside">
                  {localStorage.getItem("username")} 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#" text="danger" onClick={() => logoutHandler()}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              }
            </Nav>
        </Container>
      </Navbar>
      {/* <div className="border border-bottom">
        <div className="logo"></div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Products</NavLink>
          <NavLink to="/">About Us</NavLink>
          <NavLink to="/cart">
            Cart <p>{cartTotalQuantity}</p>
          </NavLink>
          <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Clickable Outside
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </div> */}
    </div>
  );
};

export default Navigation;
