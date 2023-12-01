import React from 'react';
import Card from 'react-bootstrap/Card';

// NationalInsigniaComponent is a functional component that displays information about national insignia.
// It receives a 'data' prop containing national insignia-related data.
const NationalInsigniaComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>National Insignia</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying the country flag */}
                    <Card.Text>
                        <b>Flag: </b>{data?.flag}
                    </Card.Text>
                    {/* Displaying the country flag image */}
                    <img src={data?.flags.png} alt={data?.flags.alt}style={{maxWidth: "100px", maxHeight: "100px"}}></img>
                    {/* Displaying additional information about the country flag */}
                    <Card.Text>
                        {data?.flags.alt}
                    </Card.Text>
                    {/* Displaying the country coat of arms image */}
                    <div><img src={data?.coatOfArms.png} alt="coatOfArms" style={{maxWidth: "100px", maxHeight: "100px"}}></img></div>
                    {/* Displaying a link to Google Maps view */}
                    <div><a href={data?.maps.googleMaps}>Google Map View</a></div>
                    {/* Displaying a link to Open Street Map view */}
                    <div><a href={data?.maps.openStreetMaps}>Open Street Map View</a></div>
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the NationalInsigniaComponent for use in other parts of the application.
export default NationalInsigniaComponent;
