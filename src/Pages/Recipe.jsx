import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Recipe() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => setRecipe(res.data.meals[0]))
            .catch(err => console.error(err));
    }, [id]);

    if (!recipe) return <h2 className="text-center my-5">Loading...</h2>;

    return (
        <Container className="my-5">
            <h2>{recipe.strMeal}</h2>
            <Row>
                <Col md={6}>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} className="img-fluid rounded" />
                </Col>
                <Col md={6}>
                    <h4>Ingredients</h4>
                    <ul>
                        {Array.from({ length: 20 }).map((_, i) => {
                            const ing = recipe[`strIngredient${i + 1}`];
                            const measure = recipe[`strMeasure${i + 1}`];
                            return ing ? <li key={i}>{ing} - {measure}</li> : null;
                        })}
                    </ul>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h4>Instructions</h4>
                    <p>{recipe.strInstructions}</p>
                </Col>
            </Row>
            {recipe.strYoutube && (
                <Row className="mt-4">
                    <Col>
                        <h4>Video Tutorial</h4>
                        <iframe
                            width="100%"
                            height="400"
                            src={`https://www.youtube.com/embed/${recipe.strYoutube.split("=")[1]}`}
                            title="YouTube video"
                            allowFullScreen
                        ></iframe>
                    </Col>
                </Row>
            )}
        </Container>
    );
}

export default Recipe;
