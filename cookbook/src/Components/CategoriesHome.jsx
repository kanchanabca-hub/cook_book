import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoriesHome() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then((res) => {
                setCategories(res.data.categories);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    return (
        <Container className="my-5 text-center">
            <h2 className="mb-4 fw-bold">🍴 Most Popular Categories</h2>

            {loading ? (
                <div className="d-flex justify-content-center align-items-center" style={{ height: "200px" }}>
                    <Spinner animation="border" variant="dark" />
                </div>
            ) : (
                <Row>
                    {categories.map((cat) => (
                        <Col md={3} sm={6} xs={12} key={cat.idCategory} className="mb-4">
                            <Card className="h-100 shadow-sm border-0 rounded-4 category-card">
                                <div className="overflow-hidden rounded-top-4">
                                    <Card.Img
                                        variant="top"
                                        src={cat.strCategoryThumb}
                                        className="img-fluid category-img"
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="fw-semibold">{cat.strCategory}</Card.Title>
                                    <Card.Text className="text-muted small" style={{ minHeight: "50px" }}>
                                        {cat.strCategoryDescription.substring(0, 60)}...
                                    </Card.Text>
                                    <Link
                                        to={`/category/${cat.strCategory}`}
                                        className="btn btn-dark btn-sm mt-auto rounded-pill"
                                    >
                                        View Recipes →
                                    </Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
}

export default CategoriesHome;
