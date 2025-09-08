import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";

function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
            .then(res => setMeals(res.data.meals))
            .catch(err => console.error(err));
    }, [name]);

    return (
        <Container className="my-5">
            <h2 className="mb-4">Category: {name}</h2>
            <Row>
                {meals.map(meal => (
                    <Col md={3} key={meal.idMeal} className="mb-4">
                        <Card>
                            <Card.Img variant="top" src={meal.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{meal.strMeal}</Card.Title>
                                <Link to={`/recipe/${meal.idMeal}`} className="btn btn-success btn-sm">
                                    View Recipe
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Category;
