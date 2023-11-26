import React from 'react';
import Card from 'react-bootstrap/Card';

// LanguagesComponent is a functional component that displays information about languages.
// It receives a 'data' prop containing language-related data.
const LanguagesComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Language[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    
                        {/* Displaying languages in an unordered list */}
                        <ul>
                            {/* Mapping through each language and rendering details */}
                            {Object.keys(data).map(key => (
                                <li key={key}>
                                    {/* Displaying the language and its value */}
                                    <Card.Text><b>{key}: </b>{data[key]}</Card.Text>
                                </li>
                            ))}
                        </ul>
                    
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the LanguagesComponent 
export default LanguagesComponent;
