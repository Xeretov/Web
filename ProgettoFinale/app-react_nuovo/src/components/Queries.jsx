import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchQueries } from '../api';

const Queries = () => {
    const [result, setResult] = useState([]);

    useEffect(() => {
        const getResult = async () => {
            const data = await fetchQueries();
            setResult(data);
        };
        getResult();
    }, []);

    return (
        <Container className="mt-4">
            <h1>Queries</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Surname</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                {result.map(item => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.cognome}</td>
                        <td>{item.nome}</td>
                        <td>{item.posizione}</td>
                        <td>{item.stipendio}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    )
}


export default Queries;
