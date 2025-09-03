import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar as BsNavbar } from "react-bootstrap";

function Navbar() {
    return (
        <BsNavbar bg="light" expand="lg" className="mb-4">
            <Container>
                <BsNavbar.Brand as={Link} to="/">🍳 CookBook</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/category/Chicken">Popular</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default Navbar;
