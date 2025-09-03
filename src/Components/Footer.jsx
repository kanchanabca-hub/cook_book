import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-5">
            <Container className="text-center">
                <p>© {new Date().getFullYear()} CookBook | Your Virtual Kitchen Assistant</p>
            </Container>
        </footer>
    );
}

export default Footer;
