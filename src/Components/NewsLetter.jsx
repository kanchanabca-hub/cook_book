import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function NewsLetter() {
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            alert("Please enter a valid email address.");
            return;
        }

        // Here you can also send the email to your backend or API
        console.log("Subscribed with:", email);

        setSubmitted(true);
        setEmail(""); // Clear input
    };

    return (
        <Container className="my-5 p-4 bg-light rounded text-center">
            <h3>Subscribe to our Newsletter</h3>
            <p>Get exclusive recipes & foodie delights straight to your inbox</p>

            {/* Show confirmation after submit */}
            {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                    🎉 Thank you for subscribing! Check your inbox for confirmation.
                </Alert>
            )}

            <Form className="d-flex justify-content-center" onSubmit={handleSubmit}>
                <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    className="w-50 me-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" variant="dark">
                    Subscribe
                </Button>
            </Form>
        </Container>
    );
}

export default NewsLetter;
