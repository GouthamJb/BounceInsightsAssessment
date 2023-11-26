import React from 'react';
import Card from 'react-bootstrap/Card';

// NameComponent is a functional component that displays information about country names.
// It receives a 'data' prop containing the name data.
const NameComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Name</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying common name */}
                    <Card.Text>
                        <b>Common: </b>{data.common}
                    </Card.Text>
                    {/* Displaying official name */}
                    <Card.Text>
                        <b>Official: </b>{data.official}
                    </Card.Text>
                    {/* Displaying native names in an unordered list */}
                    <Card.Text>
                        <b>Native Names:</b></Card.Text>
                        <ul>
                            {/* Mapping through each native name and rendering details */}
                            {Object.keys(data.nativeName).map(key => (
                                <li key={key}>
                                    {/* Displaying the native language */}
                                    <Card.Text><b>{key}</b></Card.Text>
                                    <ul>
                                        {/* Displaying common and official names for the native language */}
                                        <li><Card.Text>Common Name: {data.nativeName[key].common}</Card.Text></li>
                                        <li><Card.Text>Official Name: {data.nativeName[key].official}</Card.Text></li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the NameComponent 
export default NameComponent;
