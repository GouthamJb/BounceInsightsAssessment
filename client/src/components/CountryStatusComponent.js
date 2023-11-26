import React from 'react';
import Card from 'react-bootstrap/Card';

// CountryStatusComponent is a functional component that displays information about country status.
// It receives a 'data' prop containing status-related data.
const CountryStatusComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Country Status</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying independent status with a checkmark or cross */}
                    {data.independent ? (
                        <Card.Text><b>Independent: </b>✔</Card.Text>
                    ) : (
                        <Card.Text><b>Independent: </b>✘</Card.Text>
                    )}
                    {/* Displaying the status */}
                    <Card.Text><b>Status: </b>{data.status}</Card.Text>
                    {/* Displaying UN Member status with a checkmark or cross */}
                    {data.unMember ? (
                        <Card.Text><b>UN Member: </b>✔</Card.Text>
                    ) : (
                        <Card.Text><b>UN Member: </b>✘</Card.Text>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the CountryStatusComponent 
export default CountryStatusComponent;
