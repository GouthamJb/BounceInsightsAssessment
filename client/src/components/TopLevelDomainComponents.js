import React from 'react';
import Card from 'react-bootstrap/Card';

// TLDComponent is a functional component that displays information about Top Level Domains (TLDs).
// It receives a 'data' prop containing an array of TLDs.
const TLDComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Top Level Domain</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying TLDs in an unordered list */}
                    <ul>
                        {/* Mapping through each TLD and rendering it */}
                        {data?.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each TLD */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the TLDComponent
export default TLDComponent;
