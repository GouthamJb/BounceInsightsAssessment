import React from 'react';
import Card from 'react-bootstrap/Card';

// OtherInfoComponent is a functional component that displays miscellaneous information about a country.
// It receives a 'data' prop containing various information about the country.
const OtherInfoComponent = ({ data }) => {
    return (
        // Card component from react-bootstrap is used for styling.
        <Card style={{ marginBottom: "10px" }}>
            <Card.Body style={{ padding: "0px" }}>
                {/* Card.Header is used for displaying the title of the card. */}
                <Card.Header><Card.Title>Other Information[s]</Card.Title></Card.Header>
                <div style={{ padding: "16px" }}>
                    {/* Displaying population information */}
                    <Card.Text><b>Population: </b> {data?.population}</Card.Text>
                    <Card.Text><b>Gini Coefficient: </b></Card.Text>
                    
                        {/* Displaying Gini coefficient details in an unordered list */}
                        <ul>
                            {/* Mapping through each Gini coefficient key and rendering details */}
                            {Object?.keys(data?.gini)?.map(key => (
                                <li key={key}><Card.Text>{key}: {data?.gini?.[key]}</Card.Text></li>
                            ))}
                        </ul>
                    
                    <Card.Text><b>FIFA: </b> {data?.fifa}</Card.Text>
                    <Card.Text><b>Timezones: </b></Card.Text>
                    {/* Displaying timezones in an unordered list */}
                    <ul>
                        {/* Mapping through each timezone and rendering it */}
                        {data?.timezones?.map((e, index) => (
                            <li key={index}>
                                {/* Displaying each timezone */}
                                <Card.Text>{e}</Card.Text>
                            </li>
                        ))}
                    </ul>
                    <Card.Text><b>Start Of Week: </b> {data?.startOfWeek}</Card.Text>
                    <Card.Text><b>Root: </b>{data?.root}</Card.Text>
                    {/* Displaying car information */}
                    <Card.Text><b>Car: </b></Card.Text>
                    <ul>
                        <li><Card.Text><b>Side: </b>{data?.car.side}</Card.Text></li>
                        <li><Card.Text><b>Signs: </b></Card.Text></li>
                        {/* Displaying car signs in an unordered list */}
                        <ul>
                            {/* Mapping through each car sign and rendering it */}
                            {data?.car.signs.map((e, index) => (
                                <li key={index}>
                                    {/* Displaying each car sign */}
                                    <Card.Text>{e}</Card.Text>
                                </li>
                            ))}
                        </ul>
                    </ul>
                    {/* Displaying postal code information */}
                    <Card.Text>
                        <b>Postal Code[s]:</b></Card.Text>
                        <ul>
                            <li>
                                {/* Displaying postal code format */}
                                <Card.Text><b>Format: </b>{data?.postalCode?.format}</Card.Text>
                            </li>
                            <li><Card.Text><b>Regex: </b>{data?.postalCode?.regex}</Card.Text></li>
                        </ul>
                    
                </div>
            </Card.Body>
        </Card>
    );
}

// Exporting the OtherInfoComponent
export default OtherInfoComponent;
