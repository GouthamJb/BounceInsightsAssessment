import React from 'react';
import Card from 'react-bootstrap/Card';

// GeographyComponent is a functional component that displays information about country geography.
// It receives a 'data' prop containing geography-related data.
const GeographyComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Geography</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying the region */}
                    <Card.Text>
                        <b>Region: </b>{data.region}
                    </Card.Text>
                    {/* Displaying the subregion */}
                    <Card.Text>
                        <b>Sub-Region: </b>{data.subregion}
                    </Card.Text>
                    <Card.Text>
                        <b>Latitude-Longitude: </b>{data.latlng[0]} lat, {data.latlng[1]} long 
                    </Card.Text>
                    {data.landlocked ? (
                        <Card.Text><b>Land-Locked: </b>✔</Card.Text>
                    ) : (
                        <Card.Text><b>Land-Locked: </b>✘</Card.Text>
                    )}
                     <Card.Text><b>Borders: </b></Card.Text>
                    <ul>
                        {/* Mapping through each capital and rendering it */}
                        {data.borders.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each capital */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                    <Card.Text>
                        <b>Area: </b>{data.area} sq.km 
                    </Card.Text>
                    <Card.Text><b>Continents: </b></Card.Text>
                    <ul>
                        {/* Mapping through each continent and rendering it */}
                        {data.continents.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each continent */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the GeographyComponent for use in other parts of the application.
export default GeographyComponent;
