import React from 'react';
import Card from 'react-bootstrap/Card';

// CurrenciesComponent is a functional component that displays information about currencies.
// It receives a 'data' prop containing currency-related data.
const CurrenciesComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Currency[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    
                        {/* Displaying currencies in an unordered list */}
                        <ul>
                            {/* Mapping through each currency and rendering details */}
                            {Object.keys(data).map(key => (
                                <li key={key}>
                                    {/* Displaying the currency code */}
                                    <Card.Text><b>{key}</b></Card.Text>
                                    <ul>
                                        {/* Displaying currency name and symbol */}
                                        <li><Card.Text>Name: {data?.[key].name}</Card.Text></li>
                                        <li><Card.Text>Symbol: {data?.[key].symbol}</Card.Text></li>
                                    </ul>
                                </li>
                            ))}
                        </ul>
                   
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the CurrenciesComponent 
export default CurrenciesComponent;
