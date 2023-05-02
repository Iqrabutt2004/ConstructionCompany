import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";
import CartNav from "../../assets/images/cart-nav.svg";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand>
          <h4 className="CompanyName">Construction Company Landing</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav
            className="me-auto justify-content-end text-center"
            style={{ width: "100%" }}
          >
            <Nav.Link as={Link} to="/home" className="nav-text">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-text">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="nav-text">
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/project"
              className="nav-text"
              activeClassName="active"
            >
              Project
            </Nav.Link>
            <Nav.Link as={Link} to="/portfolio" className="nav-text">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/service" className="nav-text">
              Service
            </Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-text">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-text">
              Contact
            </Nav.Link>

            <Nav.Link>
              <img className="cursor-icon img-fluid " src={CartNav} alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
