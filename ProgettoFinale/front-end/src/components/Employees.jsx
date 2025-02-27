import React, { useEffect, useState } from 'react';
import { Container, Table, Form } from 'react-bootstrap';
import { fetchEmployees } from '../api';
import './Employees.css';

const Employees = () => {
    const [result, setResult] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortConfig, setSortConfig] = useState({ key: 'ID', direction: 'asc' });

    // Prende i dati degli impiegati dal server
    useEffect(() => {
        const getResult = async () => {
            const data = await fetchEmployees();
            setResult(data);
        };
        getResult();
    }, []);

    // Filtra i dati degli impiegati in base al tipo di sort
    const sortData = (key) => {
        let direction = 'asc';

        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }

        const sortedData = [...result].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });

        setResult(sortedData);
        setSortConfig({ key, direction });
    };

    // Filtra i dati degli impiegati in base al termine di ricerca
    const filteredResults = searchTerm ? result.filter(item => {
        return (
            item.Surname.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.Position.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }) : result;

    return (
        <Container className="mt-4">
            <div className="employees-table">
                <h1>Employees</h1>

                <Form.Control
                    type="text"
                    placeholder="Search by Name, Surname, or Position"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                />

                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th onClick={() => sortData('ID')} className={sortConfig.key === 'ID' ? 'sorted' : ''}>
                                    ID {sortConfig.key === 'ID' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Surname')} className={sortConfig.key === 'Surname' ? 'sorted' : ''}>
                                    Surname {sortConfig.key === 'Surname' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Name')} className={sortConfig.key === 'Name' ? 'sorted' : ''}>
                                    Name {sortConfig.key === 'Name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Position')} className={sortConfig.key === 'Position' ? 'sorted' : ''}>
                                    Position {sortConfig.key === 'Position' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Salary')} className={sortConfig.key === 'Salary' ? 'sorted' : ''}>
                                    Salary {sortConfig.key === 'Salary' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredResults.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="text-center">No matching results</td>
                                </tr>
                            ) : (
                                filteredResults.map(item => (
                                    <tr key={item.ID}>
                                        <td>{item.ID}</td>
                                        <td>{item.Surname}</td>
                                        <td>{item.Name}</td>
                                        <td>{item.Position}</td>
                                        <td>{item.Salary}</td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
};

export default Employees;
