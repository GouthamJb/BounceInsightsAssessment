import React from 'react';
import Card from 'react-bootstrap/Card';

// CountryCodeComponent is a functional component that displays country code information.
// It receives a 'data' prop containing the country code data.
const CountryCodeComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Country Code</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>

                    {/* Displaying Alpha-2 country code */}
                    <Card.Text><b>Alpha-2 (cca2): </b>{data.cca2}</Card.Text>
                    {/* Displaying Numeric-3 country code */}
                    <Card.Text><b>Numeric-3 (ccn3): </b>{data.ccn3}</Card.Text>
                    {/* Displaying Alpha-3 country code */}
                    <Card.Text><b>Alpha-3 (cca3): </b>{data.cca3}</Card.Text>
                    {/* Displaying International Olympic Committee Code */}
                    <Card.Text><b>International Olympic Committee Code (cioc): </b>{data.cioc}</Card.Text>

                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the CountryCodeComponent 
export default CountryCodeComponent;
