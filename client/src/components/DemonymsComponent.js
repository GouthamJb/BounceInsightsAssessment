import React from 'react';
import Card from 'react-bootstrap/Card';

// DemonymsComponent is a functional component that displays information about demonyms.
// It receives a 'data' prop containing demonym-related data.
const DemonymsComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Denonym[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    
                        {/* Displaying demonyms in an unordered list */}
                        <ul>
                            {/* Mapping through each demonym and rendering details */}
                            {Object.keys(data).map(key => (
                                <li key={key}>
                                    {/* Displaying the language code */}
                                    <Card.Text><b>{key}</b></Card.Text>
                                    <ul>
                                        {/* Displaying demonym names for female and male */}
                                        <li><Card.Text>Female: {data?.[key].f}</Card.Text></li>
                                        <li><Card.Text>Male: {data?.[key].m}</Card.Text></li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the DemonymsComponent
export default DemonymsComponent;
