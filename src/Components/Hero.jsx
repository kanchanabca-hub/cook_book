import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <div className="bg-light py-5">
            <Container>
                <Row className="align-items-center">
                    {/* Left Section */}
                    <Col md={6} className="mb-4 mb-md-0">
                        <h1 className="display-4 fw-bold text-dark">
                            Discover <span className="text-warning">Delicious Recipes</span>
                            for Every Occasion 🍽️
                        </h1>
                        <p className="lead text-muted my-4">
                            Ready to tantalize your taste buds?
                            Dive into our endless recipe library and explore new flavors today!
                        </p>
                        <div className="d-flex gap-3">
                            <Button
                                as={Link}
                                to="/category/Chicken"
                                variant="warning"
                                size="lg"
                                className="shadow"
                            >
                                Explore Recipes
                            </Button>
                            <Button
                                as={Link}
                                to="/about"
                                variant="outline-dark"
                                size="lg"
                            >
                                Learn More
                            </Button>
                        </div>
                    </Col>

                    {/* Right Section */}
                    <Col md={6} className="text-center">
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
                            alt="Delicious Food"
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
