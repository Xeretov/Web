import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-4">About Us</h1>
            <Row>
                <Col md={6}>
                    <h3>Our Mission</h3>
                    <p>
                        Our mission is to revolutionize the industry by delivering innovative solutions with exceptional customer service. We strive for excellence in every project we undertake.
                    </p>
                </Col>
                <Col md={6}>
                    <h3>Our Values</h3>
                    <ul>
                        <li>Integrity</li>
                        <li>Innovation</li>
                        <li>Customer Satisfaction</li>
                        <li>Teamwork</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h3>Why Choose Us?</h3>
                    <p>
                        With years of industry experience, our team is equipped to handle any challenges. Our creative solutions and strong work ethic ensure your success.
                    </p>
                </Col>
            </Row>
            <hr/>
            <Row id="contact-us" className="my-5">
                <Col md={12} className="text-center">
                    <h2>Contact Us</h2>
                    <p>If you'd like to get in touch, please reach out to us!</p>
                    <p>(555)555-555-555</p>
                </Col>
            </Row>
        </Container>
    );
};

export default About;
