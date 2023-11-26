import React from 'react';
import Card from 'react-bootstrap/Card';

// CapitalComponent is a functional component that displays information about capitals.
// It receives a 'data' prop containing an array of capital names.
const CapitalComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Capital[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying capitals in an unordered list */}
                    <ul>
                        {/* Mapping through each capital and rendering it */}
                        {data.capital.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each capital */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                    <Card.Text><b>Latitude-Longitude: </b>{data.capitalInfo.latlng[0]} Lat, {data.capitalInfo.latlng[1]} Long</Card.Text>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the CapitalComponent 
export default CapitalComponent;
