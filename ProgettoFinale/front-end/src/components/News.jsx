import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { fetchNews } from '../api';
import './News.css';

const newsArticles = () => {
    const [articles, setResult] = useState([]);

    useEffect(() => {
        const getResult = async () => {
            const data = await fetchNews();
            setResult(data);
        };
        getResult();
    }, []);

    return (
        <div className="news-page">
        <Row className="my-5">
            <Col md={12}>
            <h2 className="text-center mb-4">Latest News</h2>
            <Row>
                {articles.map((article) => (
                <Col md={6} lg={4} key={article.id} className="mb-4">
                    <Card className="news-card">
                    <Card.Body>
                        <Card.Title>{article.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{article.date}</Card.Subtitle>
                        <Card.Text>{article.description}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Col>
        </Row>
        </div>
    );
};

export default newsArticles;
