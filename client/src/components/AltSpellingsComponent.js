import React from 'react';
import Card from 'react-bootstrap/Card';

// CapitalComponent is a functional component that displays information about capitals.
// It receives a 'data' prop containing an array of capital names.
const AltSpellingComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Alternate Spelling[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying capitals in an unordered list */}
                    <ul>
                        {/* Mapping through each capital and rendering it */}
                        {data.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each capital */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the CapitalComponent for use in other parts of the application.
export default AltSpellingComponent;
