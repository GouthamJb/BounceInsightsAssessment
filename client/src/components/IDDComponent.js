import React from 'react';
import Card from 'react-bootstrap/Card';

// IDDComponent is a functional component that displays information about International Dialing Codes (IDD).
// It receives a 'data' prop containing IDD-related data.
const IDDComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>International Dialing Code(IDD)</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying the root IDD */}
                    <Card.Text><b>Root: </b>{data?.root}</Card.Text>
                    {/* Displaying a list of IDD suffixes */}
                    <Card.Text><b>Suffixes: </b></Card.Text>
                    {/* Displaying IDD suffixes in an unordered list */}
                    <ul>
                        {/* Mapping through each suffix and rendering it */}
                        {data?.suffixes.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each suffix */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the IDDComponent 
export default IDDComponent;
