import React from 'react';
import Card from 'react-bootstrap/Card';

// TranslationsComponent is a functional component that displays information about translations.
// It receives a 'data' prop containing translation-related data.
const TranslationsComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Translation[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    
                        {/* Displaying translations in an unordered list */}
                        <ul>
                            {/* Mapping through each translation and rendering details */}
                            {Object.keys(data)?.map(key => (
                                <li key={key}>
                                    {/* Displaying the language code */}
                                    <Card.Text><b>{key}</b></Card.Text>
                                    <ul>
                                        {/* Displaying translation names */}
                                        <li><Card.Text>Official: {data?.[key].official}</Card.Text></li>
                                        <li><Card.Text>Common: {data?.[key].common}</Card.Text></li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the TranslationsComponent
export default TranslationsComponent;
