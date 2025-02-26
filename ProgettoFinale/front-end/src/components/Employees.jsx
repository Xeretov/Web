import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { fetchEmployees } from '../api';
import './Employees.css';

const Employees = () => {
    const [result, setResult] = useState([]);
    const [sortConfig, setSortConfig] = useState({ key: 'ID', direction: 'asc' });

    useEffect(() => {
        const getResult = async () => {
            const data = await fetchEmployees();
            setResult(data);
        };
        getResult();
}, []);

// Sorting function
const sortData = (key) => {
    let direction = 'asc';

    // If the clicked column is already sorted, toggle the direction
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
    }

    // Log sorting details
    console.log(`Sorting by ${key} in ${direction} order`);

    // Sort the data
    const sortedData = [...result].sort((a, b) => {
        if (a[key] < b[key]) {
            return direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
            return direction === 'asc' ? 1 : -1;
        }
        return 0;
    });

    console.log("Sorted data:", sortedData);  // Log sorted data

    // Update the state with the sorted data
    setResult(sortedData);
    setSortConfig({ key, direction });
};

    return (
        <Container className="mt-4">
            <div className="employees-table">
                <h1>Dipendenti</h1>
                <div className="table-responsive">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th onClick={() => sortData('ID')} className={sortConfig.key == 'ID' ? 'sorted' : ''}>
                                    ID {sortConfig.key === 'ID' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Surname')} className={sortConfig.key == 'Surname' ? 'sorted' : ''}>
                                    Cognome {sortConfig.key === 'Surname' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Name')} className={sortConfig.key == 'Name' ? 'sorted' : ''}>
                                    Nome {sortConfig.key === 'Name' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Position')} className={sortConfig.key == 'Position' ? 'sorted' : ''}>
                                    Ruolo {sortConfig.key === 'Position' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                                <th onClick={() => sortData('Salary')} className={sortConfig.key == 'Salary' ? 'sorted' : ''}>
                                    Stipendio {sortConfig.key === 'Salary' && (sortConfig.direction === 'asc' ? '↑' : '↓')}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {result.map(item => (
                            <tr key={item.ID}>
                                <td>{item.ID}</td>
                                <td>{item.Surname}</td>
                                <td>{item.Name}</td>
                                <td>{item.Position}</td>
                                <td>{item.Salary}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    )
}


export default Employees;
