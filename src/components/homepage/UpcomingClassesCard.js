import React from 'react';
import { Card } from 'react-bootstrap';

const UpcomingClassesCard = props => (
    <Card className="d-flex flex-column m-xl-2 m-0 p-2 w-100">
        <section>
            <Card.Img variant="top" src={props.image} className="w-100" />
        </section>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.description}</Card.Text>
            <button variant="primary">more details</button>
        </Card.Body>
    </Card>
)

export default UpcomingClassesCard;